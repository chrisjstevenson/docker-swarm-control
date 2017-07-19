import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moxios from 'moxios';
import axios from 'axios';

describe('App Start', function () {

    beforeEach(function () {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    });

    it('renders without crashing', () => {

        moxios.stubRequest('/swarm', {
            status: 200,
            responseText: 'anything'
        });

        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

});


