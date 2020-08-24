import { GET_TRANSPORT, 
         SUBMENU_CLASSES, 
         HIDE_SUBMENU, 
         CHANGE_VALUE,
         SET_TOTAL, 
         FILTER_CONTENT, 
         FILTER_REMOVE } from './../Actions/Const/const';
import { HeaderActionsType } from './../Actions/header';
import { FilterActionsType } from './../Actions/filter';
import { CartActionType } from './../Actions/cart';

export type TransportItemType = {
    className: string,
    content: string,
    id: string,
    name: string,
    value: number,
    weight: string
}

type InitialStateType = {
    transport: Array<TransportItemType>,
    subMenuClasses: Array<string>,
    transportCopy: Array<TransportItemType>,
    total: number
}

//type InitialStateType = typeof initialState
const initialState: InitialStateType = {
    transport: [],
    subMenuClasses: ['subMenuList'] ,
    transportCopy: [],
    total: 0
}

export default function header(
        state: InitialStateType = initialState,
        action: HeaderActionsType | FilterActionsType | CartActionType
    ): InitialStateType{
    switch(action.type){
        case GET_TRANSPORT:
            return {
                ...state,
                transport: [...action.transport],
                transportCopy: [...action.transport]
            }
        case SUBMENU_CLASSES:
            return {
                ...state,
                subMenuClasses: [...state.subMenuClasses, action.subMenuListShow]
            }
        case HIDE_SUBMENU:
            return {
                ...state,
                subMenuClasses: [action.subMenuList]
            }
        case CHANGE_VALUE:
            return {
                ...state,
                transport: state.transport.map((item: TransportItemType, i: number) => {
                    if(i === action.i){
                        return {
                            ...item,
                            value: action.normalize 
                        }
                    }
                    return item
                })
            }
        case SET_TOTAL: 
            return {
                ...state,
                total: action.result
            }
        case FILTER_CONTENT:
            return {
                ...state,
                transport: state.transportCopy.filter((item: TransportItemType) => {
                        return item.weight === action.name
                })
            }
        case FILTER_REMOVE:
            return {
                ...state,
                transport: [...state.transportCopy]
            }
        default:
            return state
    }
}