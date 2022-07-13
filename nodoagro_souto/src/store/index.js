import { cartReducer, categoryReducer, orderReducer, productReducer, profileReducer } from './reducers/index'
import { combineReducers, createStore } from 'redux'

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    orders: orderReducer,
    cart: cartReducer,
    profile: profileReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))