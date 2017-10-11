import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import EditServiceDialog from './EditServiceDialog';

export default class EditServiceMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            editorOpen: false
        };
    }

    // open edit menu
    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    // close edit menu
    handleRequestClose = () => {
        this.setState({
            open: false,
            editorOpen: false,
        })
    };

    // close dialog
    handleClose = () => {
        this.setState({
            open: false,
            editorOpen: false
        });
    };

    // select menu item
    handleMenuTouchTap = (event, value) => {

        switch(value.props.primaryText) {
            case "Settings":
                this.setState({
                    open: false,
                    editorOpen: true
                });
                break;
            default:
                return;
        }
    };

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
                onClick={this.handleClose}  /* or handleSubmit */
            />,
        ];

        return (
            <div>
                <FlatButton
                    primary={true}
                    onClick={this.handleTouchTap}
                    label="Edit"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}>

                    <Menu onItemTouchTap={this.handleMenuTouchTap}>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Restart" />
                        <MenuItem primaryText="Remove" />
                    </Menu>
                </Popover>

                <Dialog
                    title={`Edit Service`}
                    actions={actions}
                    modal={false}
                    open={this.state.editorOpen}
                    onRequestClose={this.handleClose}>

                    <EditServiceDialog serviceObject={this.props.serviceObject} />

                </Dialog>

            </div>
        );
    }
}