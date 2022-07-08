import { cartReducer, categoryReducer, orderReducer, productReducer } from './reducers/index'
import { combineReducers, createStore } from 'redux'

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    orders: orderReducer,
    cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))