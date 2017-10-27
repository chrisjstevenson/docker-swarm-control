import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class EditServiceFields extends Component {

    handleChange = (event) => {;
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {

        return (
            <div>
                <TextField
                    name="nameField"
                    defaultValue={this.props.target.properties.name}
                    floatingLabelText="Name"
                    disabled={true}
                />
                 
                <br />
                <TextField
                    name="scaleField"
                    defaultValue={this.props.target.properties.scale}
                    floatingLabelText="Number of Replicas"
                    onChange={this.handleChange}
                /> 
                <br />
                <TextField
                    name="labelsField"
                    defaultValue={JSON.stringify(this.props.target.properties.labels, null, 2)}
                    floatingLabelText="Labels"
                    onChange={this.handleChange}
                />
                <br />
                <TextField
                    name="portsField"
                    defaultValue={this.props.target.properties.ports.map(port => { return port.published })}
                    floatingLabelText="Ports"
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