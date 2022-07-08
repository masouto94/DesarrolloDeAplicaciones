import {cartTypes} from '../types'

const initialState = {
    items: [],
    total: 0
}

const {ADD_ITEM, REMOVE_ITEM, CONFIRM, SUM_TOTAL} = cartTypes



export const cartReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_ITEM:
            let updatedCart = []
            if (state.items.find(item => item.id === action.item.id)){
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++
                    return item
                })
                console.log("next",updatedCart)
            } else {
                const item = {...action.item, quantity:1}
                updatedCart = [...state.items, item]
                console.log("first",updatedCart)
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
        case CONFIRM: 
            return{
                ...state

            }
        case SUM_TOTAL:
            return{
                ...state,
                total: state.items.reduce((prev, item) => (prev+item.price)*item.quantity,0 )
            }
        default:
            return state
    }
}

export default cartReducer