import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class LabelEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            editorOpen: false,
            name: "",
            value: ""
        }
    }

    handleLabelNameChange = (event) => {;
        this.setState({
           name: event.target.value 
        });
    }

    handleLabelValueChange = (event) => {;
        this.setState({
            value: event.target.value 
         });
    }

    handleSubmit = () => {;
        let label = {};
        label[this.state.name] = this.state.value;
        this.props.onSubmit(label);
        this.setState({
            open: false,
            editorOpen: false
        });
    }


    openEditor = () => {
        this.setState({ 
            open: true,
            editorOpen: true 
        })
    }

    closeEditor = () => {
        this.setState({
            open: false,
            editorOpen: false
        });
    };
    
    renderLabelFields() {
        let labels = this.props.labels
        function createLabel(index, labelName, labelValue ) {
            return (
                <div key={index}>
                    <TextField 
                        name={`labelNameField_${index}`}
                        defaultValue={labelValue} 
                        floatingLabelText={labelName}
                    />
                </div>
            );
        };

        return Object.keys(labels).map(function(key, index) {
            return createLabel(index, key, labels[key])
         });
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.closeEditor}
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
                {this.renderLabelFields()}
                <FlatButton
                    label="ADD LABEL"
                    primary={true}
                    onClick={this.openEditor}
                />

                <Dialog
                    title={`Add Label`}
                    actions={actions}
                    modal={false}
                    open={this.state.editorOpen}
                    onRequestClose={this.closeEditor} >

                    <TextField 
                        name="labelNameField"  
                        floatingLabelText="Name" 
                        onChange={this.handleLabelNameChange}
                    />
                    <TextField 
                        name="labelValueField"  
                        floatingLabelText="Value" 
                        onChange={this.handleLabelValueChange}
                    />
                </Dialog>   
            </div>
        );
    }
}