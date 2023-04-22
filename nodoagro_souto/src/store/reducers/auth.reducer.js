import {authTypes} from '../types'

const initialState = {
    authenticated: false,
    clientType: undefined
    }

const {LOGIN, LOGOUT, CLIENT_TYPE} = authTypes



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
            console.log(`El usuario a desloguear es: ${userToLogout}`)
            return{
                ...state,
                authenticated: false
            }

        case CLIENT_TYPE:
            let selectedClient = action.clientType
            return{
                ...state,
                clientType: selectedClient
            }

        default:
            return state
    }
}

export default authReducer