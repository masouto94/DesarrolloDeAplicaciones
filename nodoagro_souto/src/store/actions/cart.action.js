import { API_URL } from "../../constants/firebase/firebase";
import { cartTypes } from "../types";
const {ADD_ITEM, REMOVE_ITEM, CONFIRM, SUM_TOTAL, CLEAR_CART} = cartTypes


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

export const checkCart = () =>{
    return({
        type: CONFIRM
    })
}
export const confirmCart = (items,total) => {
    return async (dispatcher) => {
        try{

            const response = await fetch(`${API_URL}/orders.json`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items:items,
                    total: total
                })
            })
        const result= await response.json()
        dispatcher({
            type: CLEAR_CART
        })
    } catch  (error){
        console.log(error.message)
    }
    }
}