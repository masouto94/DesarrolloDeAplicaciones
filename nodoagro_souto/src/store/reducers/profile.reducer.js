import { profileTypes } from '../types/index'

const {SAVE_PHOTO, DELETE_PHOTO} = profileTypes
const defaultPicture = {uri:'../../images/no-foto.png'}
const initialState = {
    current:   defaultPicture
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_PHOTO:
        return {
            ...state,
            current: {uri:action.photo}
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