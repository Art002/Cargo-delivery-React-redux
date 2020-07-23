import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './../Button/button';
import classes from './transportPlate.module.css';

const TransportPlate = ({ name, content, clas, id, addToCart }) => {
    const styles=[classes[clas], classes.transportItem]
    return (
        <div className={styles.join(' ')}>
            <div className={classes.wrapper}>
                <h3>{name}</h3>
                <p>{content}</p>
                <div className={classes.buttonBlock}>
                    <NavLink to={id}>
                        <Button text='Читать далее'/>
                    </NavLink>
                    <NavLink to='/cart'>
                        <Button text='Заказать' id={id} addToCart={addToCart}/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

TransportPlate.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    clas: PropTypes.string,
    id: PropTypes.string,
    addToCart: PropTypes.func
  }

export default TransportPlate