import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import EditServiceFields from './EditServiceFields';

test('renders without crashing.', () => {

    const mock = { name: 'service1', ports: [] }
    
    shallow(<EditServiceFields target={mock} />);
});

test('displays name in disabled field', () => {

    const mock = { name: 'service1', ports: [] }
    const wrapper = shallow(<EditServiceFields target={mock} />);
    let rendered = wrapper.find({ name: "nameField" });

    expect(rendered.props()).to.have.property("defaultValue", "service1");
    expect(rendered.props()).to.have.property("disabled", true);
});

test('displays scale', () => {

    const mock = { scale: 3, ports: [] }
    const wrapper = shallow(<EditServiceFields target={mock} />);
    let rendered = wrapper.find({ name: "scaleField" });

    expect(rendered.props()).to.have.property("defaultValue", 3);
})