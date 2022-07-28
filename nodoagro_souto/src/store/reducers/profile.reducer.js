import { profileTypes } from '../types/index'
const {SAVE_PHOTO, DELETE_PHOTO, SAVE_PROFILE, IS_LOADED} = profileTypes
const initialState = {
    user_name: "",
    currentPhoto: null,
    email:"",
    profileExists: false
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case IS_LOADED:
        return{
            ...state,
            user_name: action.user_name,   
            currentPhoto: {uri:action.photo},
            email: action.email,
            profileExists: action.profileExists
        }

        case SAVE_PHOTO:
        return {
            ...state,
            currentPhoto: {uri:action.photo}
        }
        
        case DELETE_PHOTO:
            return {
                initialState
                
            }
        case SAVE_PROFILE:

            return{
                ...state,
                user_name: action.user_name,
                currentPhoto: {uri: action.photo},
                email: action.email,
                profileExists:action.profileExists
            }
        default:
            return state
    }
}

export default profileReducer