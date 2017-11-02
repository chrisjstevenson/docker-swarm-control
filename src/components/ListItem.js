import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';

export default class ListItem extends Component {

    handleClick = (event) => {
        this.props.onClick(this.props.value);
    }

    render() {
        return (
            <MenuItem primaryText={this.props.primaryText} value={this.props.value} onClick={this.handleClick} />
        )
    }
}