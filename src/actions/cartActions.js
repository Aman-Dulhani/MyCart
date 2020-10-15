
export const ADD_TO_CART = 'ADD_TO_CART'
export const DEL_FROM_CART = 'DEL_FROM_CART'
export const DEC_QUA = 'DEC_QUA'
export const ASC_QUA = 'ASC_QUA'

export const addToCart = (id)=>{
    return{
        type: ADD_TO_CART,
        id }
}

export const delFromCart = (id) => {
    return { type: DEL_FROM_CART, id }
}

export const decQua = (id) => {
    return { type: DEC_QUA ,id }
}

export const ascQua = (id) => {
    return { type: ASC_QUA, id}
}