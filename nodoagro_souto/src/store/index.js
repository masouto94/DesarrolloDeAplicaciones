import {} from 'redux'

import { categoryReducer, orderReducer, productReducer } from './reducers/index'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
    products:productReducer,
    categories: categoryReducer,
    orders: orderReducer
})

export default createStore(rootReducer)