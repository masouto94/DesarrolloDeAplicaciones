import * as FileSystem from 'expo-file-system'

import {insertProfile, queryResults} from '../../db/index'

import { profileTypes } from "../types/index";

const {SAVE_PHOTO, DELETE_PHOTO, SAVE_PROFILE} = profileTypes

export const getProfilePicture = async (email) =>{
    const path = await queryResults('profile_picture', 'profiles', `WHERE email = '${email}'`).then(
        (res) => {if(!res){
                    return Object.values(res.rows.item(0))[0]
                    }
                    else{
                        return null
                    }
                }
    )
    return path
}

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
        await insertProfile(user_name, photo, email)
        photo = await getProfilePicture('email')
        console.log("ESTA ES LA PHOTO DE PHOTO", photo)
        dispatcher(saveUser(user_name, photo, email))
    }
}

export const saveUser = (user_name,photo,email) => ({
    type: SAVE_PROFILE,
        user_name: user_name,
        photo: photo,
        email: email
})