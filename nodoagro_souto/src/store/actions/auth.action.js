import { authTypes } from "../types";

const {LOGIN, LOGOUT} = authTypes

export const userLogin = (user) => {
    return({
        type: LOGIN,
        user: user
    })
}

export const userLogout = (user) => {
    return({
        type: LOGOUT,
        user : user
    })
}