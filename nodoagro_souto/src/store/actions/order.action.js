import { collection, getDocs, query } from "firebase/firestore";
import {onValue, ref} from 'firebase/database'

import { API_URL } from "../../constants/firebase/firebase";
import { database } from '../../constants/firebase/firebase'
import { orderTypes } from "../types/index";

const {SELECT_ORDER, ANY_ORDER, GET_ORDERS} = orderTypes

console.log("FB", database)
const orders = ref(database, 'orders');

onValue(orders, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
});


export const selectOrder = (id) => ({
    type: SELECT_ORDER,
    orderID: id
})

export const anyLoadedOrder = () => ({
    type: ANY_ORDER
    
})

export const fetchOrders = () => {
    return async (dispatcher) => {
        try {
            const response = await orders
            const resultado = response
            console.log(resultado)
            console.log(resultado.body)
            console.log(resultado.text())
            
            dispatcher({
                type: GET_ORDERS,
                orders: []
            })
            
            
        } catch (error) {
            console.log(error)
        }
    }
}