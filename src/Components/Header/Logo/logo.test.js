import React from 'react';
import Logo from './logo';
import { shallow } from 'enzyme';

describe('logo img test', () => {
    it('should have an image', () => {
        const component = shallow(<Logo/>)
        expect(component.find('img').length).toBe(1)
    })
})