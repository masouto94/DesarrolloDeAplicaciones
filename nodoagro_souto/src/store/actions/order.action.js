import { collection, getDocs, query } from "firebase/firestore";
import {onChildAdded, onValue, ref} from 'firebase/database'

import { API_URL } from "../../constants/firebase/firebase";
import { database } from '../../constants/firebase/firebase'
import { orderTypes } from "../types/index";

const {SELECT_ORDER, ANY_ORDER, GET_ORDERS} = orderTypes

const ordersCollection = ref(database, 'orders');


const data = []
onChildAdded(ordersCollection, (snapshot, prev) => {


    let order = {
        id: snapshot.key,
        date: snapshot.val().date,
        items: snapshot.val().items,
        total: snapshot.val().total
    }
    data.push(order)
})

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

            await dispatcher({
                type: GET_ORDERS,
                orders: data
            })
            
            
        } catch (error) {
            console.log(error)
        }
    }
}