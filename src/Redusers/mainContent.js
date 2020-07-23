import { ADD_TO_CART } from './../Actions/Const/const';

const initialState = {
    inCart: []
}

export default function mainContent(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                inCart: [...state.inCart, action.id]
            }
        default:
            return state
    }
}