import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';


const Nav = ({ transport, pushClasses, subMenuClasses , hideSubMenu }) => {
    const subMenu = transport.map(({ name, id }) => {
        return <React.Fragment key={id}><NavLink to={id}>
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

Nav.propTypes = {
    transport: PropTypes.array,
    pushClasses: PropTypes.func,
    subMenuClasses: PropTypes.array,
    hideSubMenu: PropTypes.func
  }

export default Nav