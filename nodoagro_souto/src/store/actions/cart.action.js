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

export const confirmCart = (payload,total) => {
    return async dispatch => {
        try{
            const response = await fetch(`${API_URL}orders.json`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items:payload,
                    total: total
                })
            })
        const result= await response.json()
        console.log(result)
        dispatch({
            type: CONFIRM,
            confirm:true
        })
    } catch  (error){
        console.log(error.message)
    }
    }
}