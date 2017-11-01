import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Swarm from './index';

test('renders without crashing', () => {
    const component = shallow(<Swarm />);
});

test('displays summary', () => {
    const mock = {
        id: "111111",
        name: "service1",
        token: "abcdef"
    }
    
    const wrapper = shallow(<Swarm />);
    wrapper.setState({
        summary: mock
    })

    expect(wrapper.find('CardTitle').prop('title')).equal('service1');
    expect(wrapper.find('CardTitle').prop('subtitle')).equal('111111');
    expect(wrapper.find('.Join-Command').html()).contain('--token abcdef');
})

test('click button to open dialog', () => {
    const mock = {
        id: "111111",
        name: "service1",
        token: "abcdef"
    }
    
    const wrapper = shallow(<Swarm />);
    wrapper.setState({
        summary: mock
    })

    expect(wrapper.find('Dialog').prop('open')).equal(false);
    wrapper.find('FlatButton').simulate('click');
    expect(wrapper.find('Dialog').prop('open')).equal(true);
})
