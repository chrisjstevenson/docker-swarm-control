import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class EditServiceMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleMenuTouchTap = (event, value) => {

        console.log(value.props.primaryText);
    };

    render() {
        return (
            <div>
                <FlatButton
                    secondary={true}
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
            </div>
        );
    }
}