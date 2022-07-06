import React from 'react'
import { orderTypes } from '../types/index'
import { orders } from '../../constants/mock_data'

const ORDERS = orders
const {SELECT_ORDER, ANY_ORDER} = orderTypes

const initialState = {
    all: ORDERS,
    selected: null,
    any: false 
}


const orderReducer = (state=initialState,action) => {
  switch (action.type){
    case SELECT_ORDER:
        return{
            ...state,
            selected: state.all.find(order => order.id === action.orderID)
        }

    case ANY_ORDER:
        return{
            ...state,
            any: state.all.length > 0
        }
    default:
        return state
    
  }
}

export default orderReducer