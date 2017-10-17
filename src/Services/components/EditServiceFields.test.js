import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import EditServiceFields from './EditServiceFields';
import Service from '../models/service';

test('renders without crashing.', () => {  
    shallow(<EditServiceFields target={createMockServiceData()} />);
});

test('renders without crashing when passed bad props', () => {
    shallow(<EditServiceFields />);
});

test('displays name in disabled field', () => {
    const wrapper = shallow(<EditServiceFields target={createMockServiceData()} />);
    let rendered = wrapper.find({ name: "nameField" });

    expect(rendered.props()).to.have.property("defaultValue", "service1");
    expect(rendered.props()).to.have.property("disabled", true);
});

// TODO: Revisit how labels are displayed
// test('displays labels', () => {
//     const wrapper = shallow(<EditServiceFields target={createMockServiceData()} />);
//     let rendered = wrapper.find({ name: "labelsField" });
//     let label = { "crude": "word"};

//     expect(rendered.exists()).to.equal(true);
// });

test('displays scale', () => {
    const wrapper = shallow(<EditServiceFields target={createMockServiceData()} />);
    let rendered = wrapper.find({ name: "scaleField" });

    expect(rendered.props()).to.have.property("defaultValue", 3);
})

// TODO: revisit how to test event handlers
test('onChange should be called', () => {
    let handler = (event, target) => {
        console.log(event);
        console.log(target);
    }

    const wrapper =shallow(<EditServiceFields target={createMockServiceData()} onChange={handler} />);
    let rendered = wrapper.find({ name: "scaleField" });
    rendered.simulate('onchange');
});



function createMockServiceData() {
    return {
        "spec": {
        "Name": "service1",
        "Labels": {
            "fieldLabel1": "111",
            "fieldLable2:": "222"
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
        "name": "service1",
        "labels": {
        "crude": "word"
        },
        "scale": 3,
        "image": "chrisjstevenson/pineapple:latest",
        "ports": []
    }
}