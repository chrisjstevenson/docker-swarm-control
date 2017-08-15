import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { getSwarmData } from './util/stub';
import Swarm from './Swarm';

describe('List Swarm Info', function () {

    it('renders component without data.', () => {
        const component = shallow(<Swarm />);
        const item = <div>Cannot connect to Docker Swarm</div>;

        //console.log(component.debug())
        expect(component.contains(item)).equal(true);
    });

    it('renders component with swarm data.', () => {

        const component = shallow(<Swarm swarmData={getSwarmData()} />);
        const item = <li>ID: i288r9bt0wuhmyq8fmddsbg3x</li>;

        expect(component.contains(item)).equal(true);
    });
});
