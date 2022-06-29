import {PRODUCTS} from '../../constants/mock_data/index'
import { productTypes } from '../types/index'

const {SELECT_PRODUCT, FILTER_PRODUCTS} = productTypes

const initialState = {
    all: PRODUCTS,
    selected : null,
    filtered: []
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
        return {
            ...state,
            selected: state.all.find(product => product.id === action.productID)
        }
        
        case FILTER_PRODUCTS:
            return {
                ...state,
                filtered: state.all.filter(product => product.categoryID === action.categoryID)
            }
        default:
            return state
    }
}

export default productReducer