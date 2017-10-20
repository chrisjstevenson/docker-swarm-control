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
                    defaultValue={this.props.target.display.name}
                    floatingLabelText="Name"
                    disabled={true}
                />
                 
                <br />
                <TextField
                    name="scaleField"
                    defaultValue={this.props.target.display.scale}
                    floatingLabelText="Number of Replicas"
                    onChange={this.handleChange}
                /> 
            </div>
        );
    }
}

// testing out validation using prop types. 
EditServiceFields.defaultProps = {
    target: {
        display: {
            name: "",
            labels: "",
            scale: 0
        }
    }
}