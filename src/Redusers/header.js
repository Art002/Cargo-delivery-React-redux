import { GET_TRANSPORT, 
         SUBMENU_CLASSES, 
         HIDE_SUBMENU, 
         CHANGE_VALUE, 
         FILTER_CONTENT, 
         FILTER_REMOVE } from './../Actions/Const/const';

const initialState = {
    transport: [],
    subMenuClasses: ['subMenuList'],
    transportCopy: []
}

export default function header(state = initialState, action){
    switch(action.type){
        case GET_TRANSPORT:
            return {
                ...state,
                transport: action.transport,
                transportCopy: action.transport
            }
        case SUBMENU_CLASSES:
            return {
                ...state,
                subMenuClasses: [...state.subMenuClasses, 'subMenuListShow']
            }
        case HIDE_SUBMENU:
            return {
                ...state,
                subMenuClasses: ['subMenuList']
            }
        case CHANGE_VALUE:
            return {
                ...state,
                transport: state.transport.map((item, i) => {
                    if(i === action.i){
                        return {
                            ...item,
                            value: action.normalize 
                        }
                    }
                    return item
                })
            }
        case FILTER_CONTENT:
            return {
                ...state,
                transport: state.transportCopy.filter(({ weight }) => {
                        return weight === action.name
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