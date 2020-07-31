export const getTransport = (state) => {
    return state.header.transport
}

export const getIsSelected = (state) => {
    return state.filter.isSelected
}

export const getSubMenuClasses = (state) => {
    return state.header.subMenuClasses
}

export const getInCart = (state) => {
    return state.mainContent.inCart
}

export const getTotalSum = (state) => {
    return state.header.total
}