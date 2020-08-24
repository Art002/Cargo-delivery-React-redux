import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { TransportItemType } from './../../../Redusers/header';
import classes from './nav.module.css';

type NavPropsType = {
    transport: Array<TransportItemType>
    subMenuClasses: Array<string>
    pushClasses: () => void
    hideSubMenu: () => void
}

const Nav: FC<NavPropsType> = ({ transport, pushClasses, subMenuClasses , hideSubMenu }) => {
    const subMenu = transport.map(({ name, id }) => {
        return  <React.Fragment key={id}><NavLink to={id}>
                    <li className={classes.subMenuItem}>{name}</li>
                </NavLink><hr/></React.Fragment>
    })
    const menuClasses = subMenuClasses.map((item) => {
        return classes[item]
    })
    
    return (
        <nav className={classes.navMenu}>
            <ul className={classes.mainMenuList}>
                <NavLink to='/'>
                    <li>Главная</li>
                </NavLink>
                <li className={classes.subMenuTarget} 
                    onMouseEnter={pushClasses} 
                    onMouseLeave={hideSubMenu}>
                        Транспорт
                    <ul className={menuClasses.join(' ')}>
                        {subMenu}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav