import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class EditServiceFields extends Component {

    handleChange = (event) => {;
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div>
                {/* <TextField
                    name="nameField"
                    defaultValue={this.props.target.name}
                    floatingLabelText="Name"
                /> */}
                <br />
                <TextField
                    name="labelsField"
                    defaultValue={JSON.stringify(this.props.target.labels)}
                    floatingLabelText="Label"
                    onChange={this.handleChange}
                />
                <br />

                <TextField
                    name="scaleField"
                    defaultValue={this.props.target.scale}
                    floatingLabelText="Scale"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}