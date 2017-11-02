import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './AddItemButton.css';

export default class AddItemButton extends Component {
    render() {
        return (
            <div className="Button">
                <FloatingActionButton onClick={this.props.onClick}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}