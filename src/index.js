import bluebird from 'bluebird';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
global.Promise = bluebird;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
