import { authTypes } from "../types";

const {LOGIN, LOGOUT, CLIENT_TYPE} = authTypes

export const userLogin = (user) => {
    return({
        type: LOGIN,
        user: user
    })
}

export const userLogout = () => {
    return({
        type: LOGOUT
    })
}

export const selectClientType = (type) => {
    return({
        type:CLIENT_TYPE,
        clientType: type
    })
}