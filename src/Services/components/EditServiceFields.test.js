import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import EditServiceFields from './EditServiceFields';

test('renders without crashing.', () => {
    const mock = { name: 'service1', ports: [] }
    shallow(<EditServiceFields target={mock} />);
});

test('displays uneditable fields as disabled', () => {
    const mock = { name: 'service1', image: 'image1', ports: [{published: '80', target: '81'}] }
    const wrapper = shallow(<EditServiceFields target={mock} />);
    
    let rendered = wrapper.find({ name: "name" });
    expect(rendered.props()).to.have.property("disabled", true);

    rendered = wrapper.find({ name: "image" });
    expect(rendered.props()).to.have.property("disabled", true);

    rendered = wrapper.find({ name: "target" });
    expect(rendered.props()).to.have.property("disabled", true);
});

test('displays scale', () => {
    const mock = { scale: 3, ports: [] }
    const wrapper = shallow(<EditServiceFields target={mock} />);
    let rendered = wrapper.find({ name: "scale" });

    expect(rendered.props()).to.have.property("defaultValue", 3);
})