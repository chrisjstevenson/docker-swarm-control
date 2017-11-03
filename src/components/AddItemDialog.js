import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
//import Snackbar from 'material-ui/Snackbar';
import './AddItemDialog.css';

export default class AddItemDialog extends Component {

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.onClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.onSubmit} 
            />
        ];

        return (
            <div>
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.props.open} 
                    onRequestClose={this.props.onClose}>
                    {this.props.children}
                
                </Dialog>

                {/* <Snackbar
                    open={this.state.notify}
                    message={`Creating ${this.state.update.name} service...`}
                    autoHideDuration={10000}
                    onRequestClose={this.handleSnackbarOnRequestClose}
                /> */}
            </div>
        );
    }
}