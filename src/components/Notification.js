import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Notification extends Component {

    render() {
        return (
            <Snackbar
                open={this.props.openNotify}
                message={this.props.notifyMessage}
                autoHideDuration={this.props.notifyDuration}
                onRequestClose={this.props.notifyClose}
            />
        )
    }

}