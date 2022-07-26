import React from 'react'
import { orderTypes } from '../types/index'

const {SELECT_ORDER, ANY_ORDER, GET_ORDERS} = orderTypes

const initialState = {
    all: [],
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
      case GET_ORDERS:
        return{
            ...state,
            all: action.orders
        }
    default:
        return state
    
  }
}

export default orderReducer