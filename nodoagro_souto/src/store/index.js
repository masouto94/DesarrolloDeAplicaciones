import {} from 'redux'

import { categoryReducer, productReducer } from './reducers/index'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
    products:productReducer,
    categories: categoryReducer
})

export default createStore(rootReducer)