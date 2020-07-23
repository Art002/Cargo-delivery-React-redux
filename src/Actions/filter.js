import { FILTER_CONTENT, ADD_CLASS, FILTER_REMOVE } from './Const/const';

export function click(i, name){
    return (dispatch) => {
        dispatch(addClass(i))
        dispatch(filterContent(name))
    }
}
export function filterContent(name){
    return {
        type: FILTER_CONTENT,
        name 
    }
}
export function addClass(i){
    return {
        type: ADD_CLASS,
        i
    }
}
export function hideFilter(i){
    return {
        type: FILTER_REMOVE,
        i
    }
}

