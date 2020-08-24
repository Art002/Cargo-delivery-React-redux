import React from 'react';
import Nav from './nav';
import { mount } from 'enzyme';
import WithRouter from './../../../Hocs/componentWithRouter';

describe('navigation test', () => {
    const mock = jest.fn();
    const transport = [
        {name: 'Кран манипулятор', id: 'manipulator'},
        {name: 'Самосвалы', id: 'dumpTruck'},
        {name: 'Бункеровоз', id: 'skipLoader'},
    ]
    const component = mount(<WithRouter><Nav transport={transport} subMenuClasses={[]} pushClasses={mock} hideSubMenu={mock}/></WithRouter>)

    it('should map submenues', () => {
        expect(component.find('.subMenuItem').length).toBe(transport.length)
    })
    it('should show and hide menu', () => {
        const menuItem = component.find('.subMenuTarget')
        menuItem.simulate('mouseEnter')
        menuItem.simulate('mouseLeave')
        expect(mock).toHaveBeenCalledTimes(2)
    })
})