import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../../Images/logo.png';
import classes from './logo.module.css';

const Logo = () => {
    return <div className={classes.logo}>
        <img src={logo} />
    </div>
}

export default Logo