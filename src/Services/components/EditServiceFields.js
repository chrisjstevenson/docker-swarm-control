import React from 'react';
import TextField from 'material-ui/TextField';

export default class EditServiceFields extends React.Component {

    handleChange = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div>
                <TextField
                    name="nameField"
                    defaultValue={this.props.target.name}
                    floatingLabelText="Name"
                    disabled={true}
                />
                 
                <br />
                <TextField
                    name="scaleField"
                    defaultValue={this.props.target.scale}
                    floatingLabelText="Number of Replicas"
                    onChange={this.handleChange}
                /> 
                <br />
                <TextField
                    name="labelsField"
                    defaultValue={JSON.stringify(this.props.target.labels, null, 2)}
                    floatingLabelText="Labels"
                    onChange={this.handleChange}
                />
                <br />
                <TextField
                    name="portsField"
                    className="Service-Field-Input"
                    defaultValue={this.props.target.ports.map(port => { return port.published })}
                    floatingLabelText="Published Port"
                    onChange={this.handleChange}
                />  
                <TextField
                    name="portsField"
                    className="Service-Field-Input"
                    defaultValue={this.props.target.ports.map(port => { return port.target })}
                    disabled={true}
                    floatingLabelText="Target Port"
                    onChange={this.handleChange}
                />  
            </div>
        );
    }
}

EditServiceFields.defaultProps = {
    target: {
        properties: {
            name: "",
            labels: "",
            scale: 0,
            ports: []// ** can't seem to default this
        }
    }
}