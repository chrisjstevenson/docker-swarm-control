import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Start', function () {

    it('renders without crashing', () => {
        shallow(<App />);
    });
});


