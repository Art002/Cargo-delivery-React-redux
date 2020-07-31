import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Input from './../../Components/Input/input';
import { changeValue, getTotal, findCoincidence, setTotal, removeFromCart } from './../../Actions/cart';
import { getTransport, getTotalSum, getInCart } from './../../Selectors/selectors';
import classes from './cart.module.css';

const Cart = ({ inCart, transport, changeValue, getTotal, totalSum, setTotal, removeFromCart }) => {
  const total = []
  const cartItem = transport.map(({ id, value }, i) => {
    const sum = 120 * value
    const coincidence = findCoincidence(id, inCart)
    if(id === coincidence){
      total[i] = sum
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
            <span><HighlightOffIcon className={classes.remove}
                                    onClick={() => removeFromCart(id)} />
            </span>
          </div>
        </div>
        )   
    }   
  })
  const result = getTotal(total)
  useEffect(() => {
    setTotal(result)
  },[result])
  
  return (
    <div className={classes.cartBlock}>
      <hr className={classes.leftBorder}/>
      <hr className={classes.topBorder}/>
      <hr className={classes.rightBorder}/>
      <hr className={classes.bottomBorder}/>
      {cartItem}
    {totalSum ? <div className={classes.total}>Общая сумма: {totalSum}</div> : null}
    </div>
  )
}

Cart.propTypes = {
  inCart: PropTypes.array,
  transport: PropTypes.array,
  changeValue: PropTypes.func,
  getTotal: PropTypes.func,
  totalSum: PropTypes.number,
  setTotal: PropTypes.func,
  removeFromCart: PropTypes.func
}

const mapStateToProps = state => {
    return {
      inCart: getInCart(state),
      transport: getTransport(state),
      totalSum: getTotalSum(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
      changeValue: (value, i) => dispatch(changeValue(value, i)),
      getTotal: (total) => dispatch(getTotal(total)),
      findCoincidence: (id, inCart) => dispatch(findCoincidence(id, inCart)),
      setTotal: (result) => dispatch(setTotal(result)),
      removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
