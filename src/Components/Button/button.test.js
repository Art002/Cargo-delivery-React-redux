import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';

describe('onClick test', () => {
    const filterTestFn = jest.fn();
    it('should call a function', () => {
        const component = shallow(<Button addToCart={filterTestFn} />)
        component.find('button').simulate('click')
        expect(filterTestFn).toHaveBeenCalled()
    })
})