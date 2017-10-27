import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header';
import Main from './Main';
import './App.css';

/*  onTouchTap error..
    https://github.com/callemall/material-ui/issues/4670
*/
injectTapEventPlugin();

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div className="App">
                        {/*header*/}
                        <Header />
                        {/*content*/}
                        <Main />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}
