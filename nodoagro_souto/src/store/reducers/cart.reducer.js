import {cartTypes} from '../types'

const initialState = {
    items: [],
    total: 0,
    confirm:false
}

const {ADD_ITEM, REMOVE_ITEM, SUM_TOTAL, CONFIRM, CLEAR_CART} = cartTypes



export const cartReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_ITEM:
            let updatedCart = []
            if (state.items.find(item => item.id === action.item.id)){
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++
                    return item
                })
            } else {
                const item = {...action.item, quantity:1}
                updatedCart = [...state.items, item]
            }
            return{
                ...state,
                items: updatedCart
            }
            
        case REMOVE_ITEM:
            if (state.items.find(item => item.id === action.itemID && item.quantity >1)){
                return{
                    ...state,
                    items: state.items.map(item => {
                        if (item.id === action.itemID) item.quantity--
                        return item
                    })
                } 

            }else{
                return{
                    ...state,
                    items: state.items.filter(elem => elem.id !== action.itemID)
                }}

        case SUM_TOTAL:
            return{
                ...state,
                total: state.items.reduce((prev, item) => (prev+item.price)*item.quantity,0 )
            }
        case CONFIRM:
                return{
                    ...state,
                    confirm: state.items.length > 0    
            }
        case CLEAR_CART:
            return {
                ...state,
                items: [],
                total: 0,
                confirm:false
            }
        default:
            return state
    }
}

export default cartReducer