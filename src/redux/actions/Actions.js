import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "../../config/Constants"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const UpdateToCart = (data) => {
    return {
        type: UPDATE_TO_CART,
        data: data
    }
}

export const removeToCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        id: id
    }
}
