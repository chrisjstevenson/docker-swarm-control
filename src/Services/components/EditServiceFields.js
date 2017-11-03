import React from 'react';
import TextField from 'material-ui/TextField';

export default class EditServiceFields extends React.Component {

    handleChange = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className="Service-Fields">
                <div className="Service-Field">
                    <TextField
                        name="name"
                        className="Service-Field-Input"
                        defaultValue={this.props.target.name}
                        floatingLabelText="Name"
                        disabled={true}
                    />
                    <TextField name="image" 
                        defaultValue={this.props.target.image}
                        floatingLabelText="Image" 
                        floatingLabelFixed={true} 
                        disabled={true}
                    />
                </div>
                <div className="Service-Field">
                <TextField
                    name="scale"
                    defaultValue={this.props.target.scale}
                    floatingLabelText="Number of Replicas"
                    onChange={this.handleChange}
                /> 
                </div>
                <div className="Service-Field">
                <TextField
                    name="labels"
                    defaultValue={JSON.stringify(this.props.target.labels, null, 2)}
                    floatingLabelText="Labels"
                    onChange={this.handleChange}
                />
                </div>
                <div className="Service-Field">
                <TextField
                    name="published"
                    className="Service-Field-Input"
                    defaultValue={this.props.target.ports.map(port => { return port.published })}
                    floatingLabelText="Published Port"
                    onChange={this.handleChange}
                />  
                <TextField
                    name="target"
                    className="Service-Field-Input"
                    defaultValue={this.props.target.ports.map(port => { return port.target })}
                    disabled={true}
                    floatingLabelText="Target Port"
                />  
                </div>
            </div>
        );
    }
}