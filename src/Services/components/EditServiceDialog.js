import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 150,
    },
};

export default class EditServiceDialog extends Component {

    render() {
        return (
            <div>
                <TextField
                    defaultValue={this.props.serviceObject.Spec.Name}
                    floatingLabelText="Name"
                />
                <br />
                <TextField
                    defaultValue={this.props.serviceObject.Spec.Labels}
                    floatingLabelText="Label"
                />
                <br />

                <TextField
                    defaultValue={this.props.serviceObject.Spec.Mode.Replicated.Replicas}
                    floatingLabelText="Scale"
                />
            </div>
        );
    }
}