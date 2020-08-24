import { ADD_TO_CART, REMOVE_ITEM } from './../Actions/Const/const';
import { MainContentType } from './../Actions/mainContent';
import { CartActionType } from './../Actions/cart';

type InCartType = {
    inCart: Array<string>
}
const initialState: InCartType = {
    inCart: []
}

export default function mainContent(
        state: InCartType = initialState,
        action: MainContentType | CartActionType
    ): InCartType{
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