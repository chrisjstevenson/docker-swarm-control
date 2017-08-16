import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <FlatButton label="Swarm" href="/" />
                <FlatButton label="Nodes" href="/nodes" />
                <FlatButton label="Services" href="/services" />
                <FlatButton label="Tasks" disabled={true} href="/tasks" />
                <FlatButton label="Networks" disabled={true} href="/networks" />
            </div>
        );
    }
}