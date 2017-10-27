import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import EditServiceFields from './EditServiceFields';
import Service from '../models/service';

test('renders without crashing.', () => {
    const mock = {
        properties: {
            name: 'service1',
            ports: []
        }
    }

    shallow(<EditServiceFields target={mock} />);
});

test('renders without crashing when passed bad props', () => {
    shallow(<EditServiceFields />);
});

test('displays name in disabled field', () => {

    const mock = {
        properties: {
            name: 'service1',
            ports: []
        }
    }

    const wrapper = shallow(<EditServiceFields target={mock} />);
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

    const mock = {
        properties: {
            scale: 3,
            ports: []
        }
    }

    const wrapper = shallow(<EditServiceFields target={mock} />);
    let rendered = wrapper.find({ name: "scaleField" });

    expect(rendered.props()).to.have.property("defaultValue", 3);
})

test('displays published port');

// // TODO: revisit how to test event handlers
// test('onChange should be called', () => {
//     const mock = {
//         properties: {
//             scale: 3
//         },
//         ports: []
//     }

//     let handler = (event, target) => {
//         console.log(event);
//         console.log(target);
//     }

//     const wrapper = shallow(<EditServiceFields target={mock} onChange={handler} />);
//     let rendered = wrapper.find({ name: "scaleField" });
//     rendered.simulate('onchange');
// });