import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Swarm from './Swarm';
import './App.css';


class App extends Component {
  render() {
    return (

        <MuiThemeProvider>

            <div className="App">
                <Header />
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>

              <Swarm />

            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
