import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Nodes from './index';

test('renders component', () => {
    shallow(<Nodes />);
});

test('displays host data', () => {
    const mock = [
        {
            id: 111,
            hostname: "host111",
            status: "ready",
            address: "111.111.111.111",
            errors: []
        }
    ]
    
    const wrapper = shallow(<Nodes />);
    wrapper.setState({
        hosts: mock
    })

    expect(wrapper.find('CardTitle').prop('title')).equal('host111');
    expect(wrapper.find('CardTitle').prop('subtitle')).equal("111.111.111.111");
})

test('lists multiple hosts', () => {
    const mock = [
        {
            id: 111,
            hostname: "host111",
            status: "ready",
            address: "111.111.111.111",
            errors: []
        },
        {
            id: 222,
            hostname: "host222",
            status: "ready",
            address: "222.222.222.222",
            errors: []    
        }
    ]
    
    const wrapper = shallow(<Nodes />);
    wrapper.setState({
        hosts: mock
    })

    expect(wrapper.find('.ListItem')).to.have.length(2);
});

test('alert if node is not active', () => {
    const mock = [
        {
            id: 111,
            hostname: "host111",
            status: "foo",
            address: "111.111.111.111",
            errors: ['inactive-host']
        }
    ]
    
    const wrapper = shallow(<Nodes />);
    wrapper.setState({
        hosts: mock
    })

    expect(wrapper.find('.fa-exclamation-triangle')).to.exist;
    expect(wrapper.find('.Message').html()).contain('inactive-host');
});

