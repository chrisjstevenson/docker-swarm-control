import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'; 
import './ListItemMenu.css';

export default class ListItemMenu extends Component {
    render() {
        return (
            <div className="Menu">
                <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                {this.props.children}
                </IconMenu>
            </div>
        )
    }
}