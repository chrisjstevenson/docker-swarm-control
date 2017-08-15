import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Nodes from './Nodes';
import { getNodeData } from './util/stub';

describe('List Nodes', function () {

    it('renders component.', () => {
        const component = shallow(<Nodes />);
        const item = <div>Nodes</div>;

        expect(component.contains(item)).equal(true);
    });

    it('lists all node data.', () => {

        const component = shallow(<Nodes nodeData={getNodeData()} />);
        const item = <li>ID: 15fbf36l7woc27iqyfflu7ovg</li>;

        expect(component.contains(item)).equal(true);
        expect(component.instance().props.nodeData.length).equal(4);
    });
});
