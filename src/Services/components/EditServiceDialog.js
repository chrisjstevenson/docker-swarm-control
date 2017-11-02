import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import EditServiceFields from './EditServiceFields';
import Snackbar from 'material-ui/Snackbar';
import * as api from '../../api.js';

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
        api.getServiceById(this.props.serviceIdentifier)
            .then(service => {
                this.setState({service});
            });
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

        // Update service via api.
        api.updateServiceById(this.props.serviceIdentifier, {...this.state.service});
        
        // Invoke refresh on parent component.
        this.props.onRefresh();

        let updateNotification = {
            name: this.state.service.name,
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
        let service = {...this.state.service}
        switch(field) {
            case "scaleField":                
            service.scale = value;
                this.setState({service});
                break;
            case "portsField":
            service.ports.forEach(e => {
                    e.published = value;
                })
                this.setState({service});
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
                    title={"Edit Service"}
                    actions={actions}
                    modal={false}
                    open={this.props.open} //* determines whether this dialog is open or not */
                    onRequestClose={this.handleClose}>
                    
                    <EditServiceFields target={this.state.service} onChange={this.handleFieldChange} />
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