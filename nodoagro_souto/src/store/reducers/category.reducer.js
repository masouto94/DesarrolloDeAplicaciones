import {CATEGORIES} from '../../constants/mock_data/index'
import { categoryTypes } from "../types/index";

const { SELECT_CATEGORY } = categoryTypes

const initialState = {
    all: CATEGORIES,
    selected : null
}

const categoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const categoryIndex=state.all.findIndex(category => category.id == action.categoryID)
            if (categoryIndex === -1) return state
            return {
             ...state,
             selected: state.all[categoryIndex]
            }
        default:
            return state
    }
    
}

export default categoryReducer