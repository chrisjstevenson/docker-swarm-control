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

                {/*content*/}
                <Main />

            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
