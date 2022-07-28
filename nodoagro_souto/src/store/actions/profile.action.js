import * as FileSystem from 'expo-file-system'

import { countRows, insertProfile, queryResults, selectAllResults } from '../../db/index'

import { profileTypes } from "../types/index";

const {SAVE_PHOTO, DELETE_PHOTO, SAVE_PROFILE, IS_LOADED} = profileTypes

 

const profilePictureMapper = async (email) =>{
    const path = await queryResults('profile_picture', 'profiles', `WHERE email = '${email}'`).then(
        (res) => {if(res){
                    return Object.values(res.rows.item(0))[0]
                    }
                    else{
                        return null
                    }
                }
    )
    return path
}


export const isLoaded = (user_name, photo, email) => ({
    type: IS_LOADED,
    user_name: user_name,
    photo: photo,
    email: email,
    profileExists: true

})

export const loadUser =  () =>{
    return async dispatcher => {
    console.log("PASE POR ACA")
    const count = await countRows('profiles', 'email').then(
        (res) => parseInt(Object.values(res.rows.item(0))))
    console.log("ACA ES", count)
    if (count != 0){
        const user = await selectAllResults('profiles').then(
                            (res) => res.rows.item(0))

        console.log("ACA ES", user)
        
            dispatcher(isLoaded(user.user_name,
                                user.profile_picture,
                                user.email))
        }
    }
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
        photo = await profilePictureMapper(email)
        console.log("ESTA ES LA PHOTO DE PHOTO", photo)
        dispatcher(saveUser(user_name, photo, email))
        
        
    }
}

export const saveUser = (user_name,photo,email) => ({
    type: SAVE_PROFILE,
        user_name: user_name,
        photo: photo,
        email: email,
        profileExists: true
})