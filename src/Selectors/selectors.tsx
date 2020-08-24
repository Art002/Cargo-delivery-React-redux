import { RootState } from './../Redusers/rootRedusers';

export const getTransport = (state: RootState) => {
    return state.header.transport
}

export const getIsSelected = (state: RootState) => {
    return state.filter.isSelected
}

export const getSubMenuClasses = (state: RootState) => {
    return state.header.subMenuClasses
}

export const getInCart = (state: RootState) => {
    return state.mainContent.inCart
}

export const getTotalSum = (state: RootState) => {
    return state.header.total
}