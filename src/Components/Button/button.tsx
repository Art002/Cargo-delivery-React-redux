import React, { FC, MouseEvent } from 'react';
import classes from './button.module.css';

type ButtonPropsType = {
    text: string
    addToCart: (id: string) => void
    id: string
}

const Button: FC<ButtonPropsType> = ({ text, addToCart = ()=>{}, id }) => {
    return ( 
        <button className={classes.button} onClick={(e: MouseEvent<HTMLButtonElement>) => addToCart(id)}>
            {text}
        </button>
    )
}

export default Button