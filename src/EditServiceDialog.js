import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class EditServiceDialog extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                {/*<RaisedButton secondary={true} label="Edit" onClick={this.handleOpen} />*/}

                <Dialog
                    title="Modify Service"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>

                    Modify Service Dialog

                </Dialog>
            </div>
        );
    }
}