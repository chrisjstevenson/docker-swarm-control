import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import EditServiceFields from './EditServiceFields';
// import LabelEditor from './LabelEditor';
import Service from '../models/service';
// import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';
import assert from 'assert';

export default class EditServiceDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notify: false,
            update: {
                name: ""
            }
        };        
    }

    componentDidMount() {
        this.fetchModel();
    }

    fetchModel() {
        axios.get(`/services/${this.props.serviceIdentifier}`)
            .then(res => {
                return new Service(res.data);
            })
            .then(model => {
                console.log(`refesh state: ${JSON.stringify(model)}`);
                this.setState({model});
            });
    }

    updateModel() {
        
        let model = {...this.state.model}

        // Update the inner specification.
        model.metadata.spec.Labels = model.properties.labels;
        model.metadata.spec.Mode.Replicated.Replicas = parseInt(model.properties.scale, 10);
        model.metadata.spec.EndpointSpec.Ports = model.properties.ports.map(port => {
            return this.updatePorts(port);
        })

        console.log(`updating to new state: ${JSON.stringify(model)}`);

        // Get currenet state and then post the update back to the docker daemon. 
        return axios.get(`/services/${model.metadata.id}`)
            .then(res => {
                assert.equal(res.status, 200);
                return res.data;
            })
            .then(existingServiceInstance => {
                return axios.post(`/services/${model.metadata.id}/update?version=${existingServiceInstance.Version.Index}`, model.metadata.spec)
            })
            .then(res => {
                assert.equal(res.status, 200);  // no body when 200ok
            })
            .catch(err => {
                console.error(err.message)
            });
    }
        
    // Helper function for managing port configuration.
    updatePorts(portConfig) {
        return {
            Protocol: "tcp",
            TargetPort: parseInt(portConfig.target, 10),
            PublishedPort: parseInt(portConfig.published, 10),
            PublishMode: "ingress"
        }
    }

    // Close the editor, sets editorOpen to false in parent state.
    handleClose = () => {
        this.props.onClose();
    };

    handleSnackbarOnRequestClose = () => {
        this.setState({
            notify: false
        })
    }

    // handle dialog submit
    handleSubmit = () => {

        // Invoke update on the model
        this.updateModel();
        
        // Invoke refresh on parent component.
        this.props.onRefresh();

        let updateNotification = {
            name: this.state.model.properties.name,
        }

        // Show notification on this component
        this.handleNotify(updateNotification);
        
        // Close dialog by setting editorOpen to false in parent state. 
        this.props.onClose();
    }

    handleNotify = (update) => {
        this.setState({
            notify: true,
            update: update
        })
    }

    handleFieldChange = (field, value) => {
        
        let model = {...this.state.model}

        switch(field) {
            case "scaleField":                
                model.properties.scale = value;
                this.setState({model});
                break;
            case "portsField":
                model.properties.ports.forEach(e => {
                    e.published = value;
                })
                this.setState({model});
                break;
            default:
                return;
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit} 
            />,
        ];

        return (
            <div>
                <Dialog
                    title={`Edit Service`}
                    actions={actions}
                    modal={false}
                    open={this.props.open} //* determines whether this dialog is open or not */
                    onRequestClose={this.handleClose}>
                    
                    <EditServiceFields 
                        target={this.state.model} 
                        onChange={this.handleFieldChange} 
                    />
                </Dialog>

                <Snackbar
                    open={this.state.notify}
                    message={`Updating ${this.state.update.name} service...`}
                    autoHideDuration={4000}
                    onRequestClose={this.handleSnackbarOnRequestClose}
                />
            </div>
        );
    }
}