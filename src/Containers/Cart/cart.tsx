import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Input from './../../Components/Input/input';
import { changeValue, getTotal, findCoincidence, setTotal, removeFromCart } from './../../Actions/cart';
import { getTransport, getTotalSum, getInCart } from './../../Selectors/selectors';
import { RootState } from './../../Redusers/rootRedusers';
import { CartActionType } from './../../Actions/cart';
import { TransportItemType } from './../../Redusers/header';
import classes from './cart.module.css';

type MapDispatchPropsType = {
  changeValue: (value: number, i: number) => void,
  getTotal: (total: Array<number>) => any,
  findCoincidence: (id: string, inCart: Array<string>) => string | undefined,
  setTotal: (result: number) => void,
  removeFromCart: (id: string) => void
}
type MapStatePropsTypes = {
  inCart: Array<string>,
  transport: Array<TransportItemType>,
  totalSum: number
}
type PropsType = MapDispatchPropsType & MapStatePropsTypes

const Cart: FC<PropsType> = ({ inCart, transport, changeValue, getTotal, totalSum, setTotal, removeFromCart }) => {
  const total: Array<number> = []
  const cartItem: Array<any> = transport.map(({ id, value }, i) => {
    const sum = 120 * value
    const coincidence = findCoincidence(id, inCart)
    if(id === coincidence){
      total[i] = sum
      return (
        <div key={id} className={classes.cartContainer}>
          <div className={classes.cartItemImg}>
            <img src={require(`./../../Images/${id}.jpg`)} alt={id}/>
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
  const result: number = getTotal(total)
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

const mapStateToProps = (state: RootState): MapStatePropsTypes => {
    return {
      inCart: getInCart(state),
      transport: getTransport(state),
      totalSum: getTotalSum(state)
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, CartActionType>): MapDispatchPropsType => {
    return {
      changeValue: (value, i) => dispatch(changeValue(value, i)),
      getTotal: (total) => dispatch(getTotal(total)),
      findCoincidence: (id, inCart) => dispatch(findCoincidence(id, inCart)),
      setTotal: (result) => dispatch(setTotal(result)),
      removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Cart) as FC