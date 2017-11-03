import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import './EditItemDialog.css';

export default class EditItemDialog extends Component {

    handleFormSubmit = () => {
        this.props.onSubmit(this.props.itemIdentifier);
    }

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
                onClick={this.handleFormSubmit} 
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
            </div>
        );
    }
}