import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class EditMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            editorOpen: false,
        };
    }

    // Opens the edit menu.
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

    // select menu item
    handleMenuTouchTap = (event, value) => {        
        switch(value.props.primaryText) {
            case "Settings":
                this.props.onOpenSettings()
                this.setState({
                    open: false,
                });
                break;
            default:
                return;
        }
    };

    // close dialog
    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
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
                        <MenuItem primaryText="Delete" />
                    </Menu>
                </Popover>
                
            </div>
        );
    }
}