import React, { FC } from 'react';
import logo from './../../../Images/logo.png';
import classes from './logo.module.css';

const Logo: FC = () => {
    return <div className={classes.logo}>
                <img src={logo} alt='vehicle'/>
           </div>
}

export default Logo