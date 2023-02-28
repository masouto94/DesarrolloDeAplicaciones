import {authTypes} from '../types'

const initialState = {
    authenticated: false,
    }

const {LOGIN, LOGOUT} = authTypes



export const authReducer = (state=initialState, action) => {
    switch (action.type){
        case LOGIN:
            let userToLogin = action.user
            console.log(`El usuario a loguear es: ${userToLogin}`)
            return{
                ...state,
                authenticated: true
            }
            
        case LOGOUT:
            let userToLogout = action.user
            console.log(`El usuario a loguear es: ${userToLogout}`)
            return{
                ...state,
                authenticated: false
            }

        default:
            return state
    }
}

export default authReducer