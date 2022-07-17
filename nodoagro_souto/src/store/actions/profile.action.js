import * as FileSystem from 'expo-file-system'

import {insertProfile} from '../../db/index'
import { profileTypes } from "../types/index";

const {SAVE_PHOTO, DELETE_PHOTO, SAVE_PROFILE} = profileTypes

//ver si se puede dejar privada porque despacha savePlace que seria saveProfilePicture
export const savePhoto = (photo) => ({
    type: SAVE_PHOTO,
    photo: photo

})
export const saveProfilePicture = (photo) => {
    return async dispatcher =>{
        const fileName = photo.split("/").pop()
        const path = FileSystem.documentDirectory + fileName
        try{
            await FileSystem.moveAsync({
                    from: photo,
                    to: path
                })
            //await FileSystem.copyAsync(photo,path)
        } catch (error){
            console.log(error)
            throw error
        }
        dispatcher(savePhoto(path))
    }
}

export const deleteProfilePicture = () => ({
    type: DELETE_PHOTO
})

export const saveUserProfile =  (user_name, photo, email) => {
    console.log(user_name, photo, email)
    return async dispatcher => {
        const transaction =  await insertProfile(user_name, photo, email)
        console.log(transaction)
        dispatcher(saveUser(user_name, photo, email))
    }
}

export const saveUser = (user_name,photo,email) => ({
    type: SAVE_PROFILE,
        user_name: user_name,
        photo: photo,
        email: email
})