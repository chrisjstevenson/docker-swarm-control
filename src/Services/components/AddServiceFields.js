import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class AddServiceFields extends Component {
    
    handleChange = (event) => {;
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className="Service-Fields">
                <div className="Service-Field">
                    <TextField name="name" 
                               hintText="e.g. myapp" 
                               floatingLabelText="Name" 
                               floatingLabelFixed={true} 
                               onChange={this.handleChange} />
                </div>
                <div className="Service-Field">
                    <TextField name="image" 
                               hintText="ubuntu:14.04.3" 
                               floatingLabelText="Image" 
                               floatingLabelFixed={true} 
                               onChange={this.handleChange} />
                </div>    
                <div className="Service-Field">
                    <TextField name="scale" 
                               defaultValue={1} 
                               floatingLabelText="Number of Replicas" 
                               onChange={this.handleChange} /> 
                </div>
                <div className="Service-Field">
                    <TextField name="ports" 
                               hintText="8080, etc."
                               floatingLabelText="Ports"
                               floatingLabelFixed={true} 
                               onChange={this.handleChange} />
                </div>  
            </div>
        );
    }
}