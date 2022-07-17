import { profileTypes } from '../types/index'
const {SAVE_PHOTO, DELETE_PHOTO, SAVE_PROFILE} = profileTypes
const defaultPicture = {uri:'../../images/no-foto.png'}
const initialState = {
    user_name: "",
    currentPhoto:   defaultPicture,
    email:""
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_PHOTO:
        return {
            ...state,
            currentPhoto: {uri:action.photo}
        }
        
        case DELETE_PHOTO:
            return {
                ...state,
            }
        case SAVE_PROFILE:

            return{
                ...state,
                user_name: action.user_name,
                currentPhoto: action.photo,
                email: action.email
            }
        default:
            return state
    }
}

export default profileReducer