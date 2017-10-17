import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                    defaultValue={this.props.target.name}
                    floatingLabelText="Name"
                    disabled={true}
                />
                 
                <br />
                <TextField
                    name="scaleField"
                    defaultValue={this.props.target.scale}
                    floatingLabelText="Scale"
                    onChange={this.handleChange}
                />

                <br /> 
            </div>
        );
    }
}

// testing out validation using prop types. 
EditServiceFields.defaultProps = {
    target: {
        name: "",
        labels: "",
        scale: 0
    }
}