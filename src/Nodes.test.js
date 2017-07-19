import React from 'react';
import { shallow } from 'enzyme';
import Nodes from './Nodes';
import nodeData from './util/nodes.json';
import moxios from 'moxios';

describe('List Nodes', function () {

    beforeEach(function () {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    });

    it('renders node id', () => {

       // console.log(nodeData);

        moxios.stubRequest('/nodes', {
            status: 200,
            response: { body: nodeData }
        });

        const wrapper = shallow(<Nodes />);
        const id = <li>ID: m0utgrzme6artj0mqjpojcii2</li>;
        //const id = <div>Nodes</div>;
        expect(wrapper.contains(id)).toEqual(true);
    });
});


