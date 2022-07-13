import { profileTypes } from '../types/index'

const {SAVE_PHOTO, DELETE_PHOTO} = profileTypes

const initialState = {
    current:null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_PHOTO:
        return {
            ...state,
            current: action.photo
        }
        
        case DELETE_PHOTO:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default profileReducer