import { API_URL } from "../../constants/firebase/firebase";
import { cartTypes } from "../types";
const {ADD_ITEM, REMOVE_ITEM, CONFIRM, SUM_TOTAL} = cartTypes


export const addToCart = (item) => {
    return({
        type: ADD_ITEM,
        item: item
    })
}

export const removeFromCart = (itemID) => {
    return({
        type: REMOVE_ITEM,
        itemID : itemID
    })
}
export const sumTotalPriceInCart = () => {
    return ({
        type: SUM_TOTAL
    })
}

export const confirmCart = () => {
    return({
        type: CONFIRM
    })
}