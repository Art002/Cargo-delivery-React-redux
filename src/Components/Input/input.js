import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.module.css';

const Input = ({ type, styles, value, onChange, i }) => {    
    return <input type={type} 
                  className={classes[styles]} 
                  value={value}
                  onChange={(e) => onChange(parseInt(e.target.value), i)}
                  >
           </input>
}

Input.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.string,
    onChange: PropTypes.func,
    i: PropTypes.number
  }

export default Input