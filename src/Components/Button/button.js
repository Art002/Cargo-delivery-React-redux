import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.css';

const Button = ({ text, addToCart = ()=>{}, id }) => { 
    return ( 
        <button className={classes.button} onClick={() => addToCart(id)}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    addToCart: PropTypes.func,
    id: PropTypes.string
  }

export default Button