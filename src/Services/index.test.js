import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Services from './index';
import Service from './models/service';

describe('List Services', function () {

    it('renders without crashing.', () => {
        shallow(<Services />);
    });

    it('renders table of services.', () => {
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
            }
        ]

        const wrapper = shallow(<Services />);
        wrapper.setState({
            model: mock
        })
        
        expect(wrapper.find('TableRow')).to.have.length(2); // ** header and first row
    });
});
