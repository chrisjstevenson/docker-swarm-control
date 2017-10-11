import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Services from './index';
import { getServiceData, getNodeData } from '../util/stub';

describe('List Services', function () {

    it('renders component.', () => {
        const component = shallow(<Services />);
        const item = <div>Services</div>;

        expect(component.contains(item)).equal(true);
    });

    it('lists all service data.', () => {

        const component = shallow(<Services serviceData={getServiceData()} nodeData={getNodeData()} />);
        const item = <div>Services</div>;

        expect(component.contains(item)).equal(true);
        expect(component.instance().props.serviceData.length).equal(2);
    });
});
