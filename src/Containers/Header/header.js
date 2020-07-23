import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { transportList, pushClasses, hideSubMenu } from './../../Actions/header';
import Logo from '../../Components/Header/Logo/logo';
import Nav from '../../Components/Header/Nav/nav'
import classes from './header.module.css';

const Header = ({ getTransport, transport, pushClasses, subMenuClasses, hideSubMenu }) => {
    useEffect(() => {
        getTransport()
    }, [])
    return(
        <header className={classes.header}>
            <Logo />
            <Nav transport={transport}
                 subMenuClasses={subMenuClasses} 
                 pushClasses={pushClasses}
                 hideSubMenu={hideSubMenu}/>
            <hr className={classes.greadientBorder}/>
        </header>
    ) 
}

Header.propTypes = {
    transport: PropTypes.array,
    getTransport: PropTypes.func,
    pushClasses: PropTypes.func,
    subMenuClasses: PropTypes.array,
    hideSubMenu: PropTypes.func
  }

const mapStateToProps = state => {
    return {
        transport: state.header.transport,
        subMenuClasses: state.header.subMenuClasses
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        getTransport: () => dispatch(transportList()),
        pushClasses: () => dispatch(pushClasses()),
        hideSubMenu: () => dispatch(hideSubMenu())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)