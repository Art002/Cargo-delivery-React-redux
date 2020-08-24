import React, { FC } from 'react';
import classes from './input.module.css';

type InputPropsType = {
  type: string
  styles: string
  value: number
  onChange: (value: number, i: number) => void
  i: number
}

const Input: FC<InputPropsType> = ({ type, styles, value, onChange, i }) => {    
    return <input type={type} 
                  className={classes[styles]} 
                  value={value}
                  onChange={(e) => onChange(parseInt(e.target.value), i)}
                  >
           </input>
}

export default Input