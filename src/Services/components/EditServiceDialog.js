import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import EditServiceFields from './EditServiceFields';
//import LabelEditor from './LabelEditor';
import Service from '../models/service';
import axios from 'axios';

export default class EditServiceDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            model: {}
        };
    }

    componentDidMount() {
        // Initial fetch.
        this.fetchService();
    }

    fetchService() {
        axios.get(`/services/${this.props.serviceIdentifier}`)
            .then(res => {
                return new Service(res.data);
            })
            .then(model => {
                console.log(`refesh state: ${JSON.stringify(model)}`);
                this.setState({model});
            });
    }

    // Close the editor, sets editorOpen to false in parent state.
    handleClose = () => {
        this.props.onClose();
    };

    // handle dialog submit  ** currently for scale only **
    handleSubmit = () => {
        // Invoke updateScale on this Service.
        this.state.model.updateScale(this.state.scale);
        
        // Invoke refresh on parent component.
        this.props.onRefresh();

        let updateNotification = {
            name: this.state.model.name,
            scale: this.state.scale,
        }

        // Invoke notification on parent component.
        this.props.onNotify(updateNotification);
        
        // Close dialog by setting editorOpen to false in parent state. 
        this.props.onClose();
    }

    handleAddLabelSubmit = (label) => {
        console.log("adding label" + JSON.stringify(label));
        let model = {...this.state.model}
        model.lables = label;
        this.setState({model});
    }

    // Handles field changes from EditServiceFields component.
    //   Currently only modifying the scale is supported. 
    handleFieldChange = (field, value) => {
        switch(field) {
            case "scaleField":
                this.setState({
                    scale: value
                });
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
                    open={this.props.editorOpen} //* determines whether this dialog is open or not */
                    onRequestClose={this.handleClose}>
                    
                    <EditServiceFields 
                        target={this.state.model} 
                        onChange={this.handleFieldChange} 
                    />

                    {/* <LabelEditor 
                        labels={this.state.model.labels} 
                        onSubmit={this.handleAddLabelSubmit} 
                    /> */}

                </Dialog>
            </div>
        );
    }
}