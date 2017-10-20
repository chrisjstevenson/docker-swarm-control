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
                display: {
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
        //console.log(wrapper.debug());
        expect(wrapper.find('TableRow')).to.have.length(2); // ** header and first row
    });

    it('displays snackbar on notify', () => {
        const wrapper = shallow(<Services />);
        wrapper.setState({
            notify: true,
            update: {
                name: "BananaBanana"
            }
        })
        //console.log(wrapper.debug());    
        let rendered = wrapper.find('Snackbar');
        expect(rendered.props()).to.have.property('open', true);
        expect(rendered.props()).to.have.property('message', 'Updating BananaBanana service...');
    })
});
