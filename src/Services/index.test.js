import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Services from './index';
import Service from './models/Service';

describe('List Services', function () {

    it('renders without crashing.', () => {
        shallow(<Services />);
    });

    it('renders table of services.', () => {
        const wrapper = shallow(<Services />);
        wrapper.setState({
            model: mockServiceData
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





const mockServiceData = [
    {
        "spec": {
        "Name": "pineapple",
        "Labels": {
            "crude": "word"
        },
        "TaskTemplate": {
            "ContainerSpec": {
            "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
            "DNSConfig": {}
            },
            "Resources": {
            "Limits": {},
            "Reservations": {}
            },
            "Placement": {
            "Platforms": [
                {
                "Architecture": "amd64",
                "OS": "linux"
                }
            ]
            },
            "ForceUpdate": 0,
            "Runtime": "container"
        },
        "Mode": {
            "Replicated": {
            "Replicas": 3
            }
        }
        },
        "endpoint": {
        "Spec": {}
        },
        "id": "ubfzvn0nahswtjrtbd77eu8r4",
        "version": {
        "Index": 402
        },
        "name": "pineapple",
        "labels": {
        "crude": "word"
        },
        "scale": 3,
        "image": "chrisjstevenson/pineapple:latest",
        "ports": []
    }
]
