import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Services from './index';

test('renders without crashing.', () => {
    shallow(<Services />);
});

test('displays multiple services.', () => {
    const mock = [
        {
            id: "111111",
            name: "service1",
            scale: 4,
            image: "image1",
            ports: []
        },
        {
            id: "222222",
            name: "service2",
            scale: 3,
            image: "image2",
            ports: []
        }
    ]

    const wrapper = shallow(<Services />);
    wrapper.setState({
        services: mock
    })
    
    expect(wrapper.find('.ListItem')).to.have.length(2);
});

test('displays service details', () => {
    const mock = [
        {
            id: "111111",
            name: "service1",
            scale: 4,
            image: "image1",
            ports: [{ published: 1111 }]
        }
    ]

    const wrapper = shallow(<Services />);
    wrapper.setState({
        services: mock
    })

    expect(wrapper.find('CardTitle').prop('title')).equal('service1');
    expect(wrapper.find('CardTitle').prop('subtitle')).equal("image1");    
    expect(wrapper.find('a').html()).contains(1111)
})

test('set visibility to open edit item dialog', () => {
    const mock = [
        {
            id: "111111",
            name: "service1",
            scale: 4,
            image: "image1",
            ports: [{ published: 1111 }]
            
        }
    ]

    const wrapper = shallow(<Services />);
    wrapper.setState({
        services: mock
    })

    expect(wrapper.find({itemIdentifier: '111111'}).prop('open')).equal(false);
    wrapper.setState({
        visibility: {
            ['111111']: true
        }
    })
    expect(wrapper.find({itemIdentifier: '111111'}).prop('open')).equal(true);  
})

test('click + button to show add item dialog', () => {
    const wrapper = shallow(<Services />);
    expect(wrapper.find('EditItemDialog').prop('open')).equal(false);
    wrapper.find('AddItemButton').simulate('click');
    expect(wrapper.find('EditItemDialog').prop('open')).equal(true);  
})

test('flash notify when clicking remove', () => {
    const mock = [
        {
            id: "111111",
            name: "service1",
            scale: 4,
            image: "image1",
            ports: [{ published: 1111 }]
            
        }
    ]

    const wrapper = shallow(<Services />);
    wrapper.setState({
        services: mock
    })

    // Todo: need to mock api call. 
    //wrapper.find({primaryText: 'Remove'}).simulate('click');
    //expect(wrapper.find('Nofitication').prop('openNotify')).equal(true);
    //expect(wrapper.find('Nofitication').prop('notifyMessage')).equal("Removing service from Swarm...");
})
