import { ADD_TO_CART } from './Const/const';

export type MainContentType = ReturnType<typeof addToCart> 

export const addToCart = (id: string) => ({type: ADD_TO_CART, id} as const)
