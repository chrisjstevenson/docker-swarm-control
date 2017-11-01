import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Services from './index';
import Service from './models/service';

test('renders without crashing.', () => {
    shallow(<Services />);
});

test('displays multiple services.', () => {
    const mock = [
        {
            metadata: {
                id: "111111",
            },
            properties: {
                name: "service1",
                scale: 4,
                image: "image1",
                ports: []
            }
        },
        {
            metadata: {
                id: "222222",
            },
            properties: {
                name: "service2",
                scale: 3,
                image: "image2",
                ports: []
            }
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
            metadata: {
                id: "111111",
            },
            properties: {
                name: "service1",
                scale: 4,
                image: "image1",
                ports: [{ published: 1111 }]
            }
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

test('click menuitem to open edit service dialog', () => {
    const mock = [
        {
            metadata: {
                id: "111111",
            },
            properties: {
                name: "service1",
                scale: 4,
                image: "image1",
                ports: [{ published: 1111 }]
            }
        }
    ]

    const wrapper = shallow(<Services />);
    wrapper.setState({
        services: mock
    })

    expect(wrapper.find('EditServiceDialog').prop('open')).equal(false);
    wrapper.find('MenuItem').simulate('click');
    expect(wrapper.find('EditServiceDialog').prop('open')).equal(true);  
})
