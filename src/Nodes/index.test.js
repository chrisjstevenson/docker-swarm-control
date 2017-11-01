import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Nodes from './index';
import { getNodeData } from '../util/stub';

test('renders component.', () => {
    shallow(<Nodes />);
});

test('lists all node data.', () => {

    const mock = [
        {
            id: 111,
            hostname: "host111",
            status: "ready",
            address: "111.111.111.111"     
        },
        {
            id: 222,
            hostname: "host222",
            status: "ready",
            address: "222.222.222.222"     
        }
    ]
    
    const wrapper = shallow(<Nodes />);
    wrapper.setState({
        model: mock
    })

    expect(wrapper.find('CardTitle')).to.have.length(2);
});

test('display alert if node is not active', () => {
    const mock = [
        {
            id: 111,
            hostname: "host111",
            status: "foo",
            address: "111.111.111.111"     
        }
    ]
    
    const wrapper = shallow(<Nodes />);
    wrapper.setState({
        model: mock
    })

    // todo: how to assert jsx within component attribute
    expect(wrapper.find('.fa-exclamation')).to.exist;
});

