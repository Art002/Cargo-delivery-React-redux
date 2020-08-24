import React from 'react';
import Loading from './loading';
import { shallow } from 'enzyme';

describe('loading render test', () => {
    it('should render', () => {
        const component = shallow(<Loading />)
        expect(component.find('div').length).toBe(1)
    })
})