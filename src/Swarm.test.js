import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { getSwarmData } from './util/stub';
import Swarm from './Swarm';

test('flash alert when no connection', () => {
    const component = shallow(<Swarm />);
    let rendered = component.find({ className: "Alert" });
    expect(rendered).to.exist;
});

test('renders summary data', () => {
    const component = shallow(<Swarm swarmData={getSwarmData()} />);
    let rendered = component.find({ subtitle: "i288r9bt0wuhmyq8fmddsbg3x" });
    expect(rendered).to.exist;
});
