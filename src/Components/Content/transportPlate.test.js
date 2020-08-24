import React from 'react';
import TransportPlate from './transportPlate';
import { mount } from 'enzyme';
import WithRouter from './../../Hocs/componentWithRouter';

describe('transportPlate test', () => {
    let component
    const testFn = jest.fn()
    beforeEach(() => {
        component = mount(<WithRouter><TransportPlate id='1' addToCart={testFn} content='ipsum' name='lorem'/></WithRouter>)
    })
    it('should be rendered', () => {
        expect(component.find(TransportPlate).render()).toHaveLength(1)
    })
    it('should contain 2 buttons', () => {
        expect(component.find('button').length).toBe(2)
    })
    it('should contain name', () => {
        expect(component.find('h3').text()).toBe('lorem')
    })
    it('should contain content', () => {
        expect(component.find('h3').text()).toBe('lorem')
    })
})