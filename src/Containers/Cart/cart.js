import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './../../Components/Input/input';
import { changeValue } from './../../Actions/cart';
import classes from './cart.module.css';

const Cart = ({ inCart, transport, changeValue }) => {
  const total = []
  let result;
  const cartItem = transport.map(({ id, value }, i) => {
    const sum = 120 * value
    const coincidence = inCart.find((item) => item === id)
    if(id === coincidence){
      total[i] = sum
      result = total.reduce((prev, current) => prev + current)
      return (
        <div key={id} className={classes.cartContainer}>
          <div className={classes.cartItemImg}>
            <img src={require(`./../../Images/${id}.jpg`)}/>
          </div>
          <div className={classes.cartControls}>
            <ul>
              <li>
                Количество часов: 
                <Input styles='cartInput' 
                        type='number' 
                        onChange={changeValue} 
                        value={value}
                        i={i}
                />
              </li>
              <hr className={classes.divider}/>
              <li>
                Сумма: {sum}
              </li>
            </ul>
            
          </div>
        </div>
        )   
    }   
  })
  
  return (
    <div className={classes.cartBlock}>
      <hr className={classes.leftBorder}/>
      <hr className={classes.topBorder}/>
      <hr className={classes.rightBorder}/>
      <hr className={classes.bottomBorder}/>
      {cartItem}
    {result ? <div className={classes.total}>Общая сумма: {result}</div> : null}
    </div>
  )
}

Cart.propTypes = {
  inCart: PropTypes.array,
  transport: PropTypes.array,
  changeValue: PropTypes.func
}

const mapStateToProps = state => {
    return {
        inCart: state.mainContent.inCart,
        transport: state.header.transport
    }
}
const mapDispatchToProps = dispatch => {
    return {
      changeValue: (value, i) => dispatch(changeValue(value, i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
