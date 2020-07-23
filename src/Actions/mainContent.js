import { ADD_TO_CART } from './Const/const';

export function addToCart(id){
    return {
        type: ADD_TO_CART,
        id
    }
}