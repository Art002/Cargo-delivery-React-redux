import React from 'react';
import Input from './input';
import { shallow } from 'enzyme';

describe('input test', () => {
    const mock = jest.fn();
    const event = {
        preventDefault() {},
        target: { value: 'Другой текст' }
      };
    const component = shallow(<Input type='text' value='Какой-то текст' onChange={mock}/>)
    
    it('should have valid type', () => {
        const inpType = component.find('input')
        expect(inpType.props().type).toBe(component.props().type)
    })
    it('should have correct value', () => {
        const inpType = component.find('input')
        expect(inpType.props().value).toBe('Какой-то текст')
    })
    it('should call onChange', () => {
        const inpType = component.find('input')
        // uncorrect
        inpType.simulate('change', event)
        expect(mock).toHaveBeenCalled()
        
    })
})