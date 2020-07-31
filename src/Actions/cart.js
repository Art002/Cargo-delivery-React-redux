import { CHANGE_VALUE, SET_TOTAL, REMOVE_ITEM } from './Const/const';

export function changeValue(value, i){
    const normalize = Math.min(Math.max(value, 1), 10)
    return {
        type: CHANGE_VALUE,
        normalize,
        i
    }
}

export function getTotal(total) {
    return () => {
        return total.reduce((prev, current) => prev + current, 0)
    }   
}

export function setTotal(result){
    return {
        type: SET_TOTAL,
        result
    }
}

export function removeFromCart(id){
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function findCoincidence(id, inCart) {
    return inCart.find((item) => item === id)
}