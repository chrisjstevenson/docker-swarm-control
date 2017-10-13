import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import EditServiceFields from './EditServiceFields';

export default class EditServiceMenu extends React.Component {

    //Props:
    //  target (the service description we want to modify)


    constructor(props) {
        super(props);

        this.state = {
            open: false,
            editorOpen: false,
            labels: this.props.labels,
            scale: this.props.scale,
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

    // handle dialog submit  ** currently for scale only **
    handleSubmit = () => {
        // Invoke updateScale on this Service.
        this.props.target.updateScale(this.state.scale);
        
        // Invoke refresh on parent component.
        this.props.onRefresh();

        // Set state, close dialog.
        this.setState({
            open: false,
            editorOpen: false
        });
    }

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

    handleFieldChange = (field, value) => {
        switch(field) {
            case "labelsField":
                this.setState({
                    labels: value
                });
                break; 
            case "scaleField":
                this.setState({
                    scale: value
                });
                break;               
            default:
                return;
        }
    }

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
                onClick={this.handleSubmit} 
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
                    <EditServiceFields target={this.props.target} onChange={this.handleFieldChange} />
                </Dialog>

            </div>
        );
    }
}