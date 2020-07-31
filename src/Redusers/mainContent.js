import { ADD_TO_CART, REMOVE_ITEM } from './../Actions/Const/const';

const initialState = {
    inCart: []
}

export default function mainContent(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                inCart: [...state.inCart, action.id]
            }
        case REMOVE_ITEM:
            return {
                inCart: state.inCart.filter(item => item !== action.id)
            }
        default:
            return state
    }
}