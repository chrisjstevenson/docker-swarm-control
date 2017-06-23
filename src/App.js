import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Main from './Main';
import './App.css';


class App extends Component {
  render() {
    return (

        <MuiThemeProvider>

            <div className="App">
                {/*header*/}
                <Header />

                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {/*content*/}
                <Main />

            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
