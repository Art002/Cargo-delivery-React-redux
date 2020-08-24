import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './../Button/button';
import classes from './transportPlate.module.css';

type TransportPlatePropsType = {
    name: string
    content: string
    clas: string
    id: string
    addToCart: (id: string) => void
}

const TransportPlate: FC<TransportPlatePropsType> = ({ name, content, clas, id, addToCart }) => {
    const styles=[classes[clas], classes.transportItem]
    return (
        <div className={styles.join(' ')}>
            <div className={classes.wrapper}>
                <h3>{name}</h3>
                <p>{content}</p>
                <div className={classes.buttonBlock}>
                    <NavLink to={id}>
                        <Button text='Читать далее' id={id} addToCart={addToCart}/>
                    </NavLink>
                    <NavLink to='/cart'>
                        <Button text='Заказать' id={id} addToCart={addToCart}/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TransportPlate