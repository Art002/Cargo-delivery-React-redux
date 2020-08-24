import { FILTER_CONTENT, ADD_CLASS, FILTER_REMOVE } from './Const/const';
import { Dispatch } from 'redux';

export type FilterActionsType = ReturnType<typeof filterContent>  
                              | ReturnType<typeof addClass>  
                              | ReturnType<typeof hideFilter>

export const click = (i: number, name: string) => {
    return (dispatch: Dispatch<FilterActionsType>) => {
        dispatch(addClass(i))
        dispatch(filterContent(name))
    }
}
export const filterContent = (name: string) => ({type: FILTER_CONTENT,name} as const)
export const addClass = (i: number) => ({type: ADD_CLASS,i} as const)
export const hideFilter = (i: number) => ({type: FILTER_REMOVE,i} as const)


