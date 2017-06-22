import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <FlatButton label="Swarm" />
                <FlatButton label="Nodes" />
                <FlatButton label="Services" />
                <FlatButton label="Tasks" />
                <FlatButton label="Networks" disabled={true} />
            </div>
        );
    }
}

export default Header;