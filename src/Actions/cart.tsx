import { CHANGE_VALUE, SET_TOTAL, REMOVE_ITEM } from './Const/const';

export type CartActionType = ReturnType<typeof changeValue> 
                           | ReturnType<typeof setTotal> 
                           | ReturnType<typeof removeFromCart>

export const changeValue = (value: number, i: number) => {
    const normalize = Math.min(Math.max(value, 1), 10)
    return {type: CHANGE_VALUE, normalize, i} as const
} 

export const getTotal = (total: Array<number>) => {
    return () => {
        return total.reduce((prev, current) => prev + current, 0)
    }   
}
export const findCoincidence = (id: string, inCart: Array<string>): any => {
    return inCart.find((item) => item === id)
}
export const setTotal = (result: number) => ({type: SET_TOTAL, result} as const)
export const removeFromCart = (id: string) => ({type: REMOVE_ITEM, id} as const)
