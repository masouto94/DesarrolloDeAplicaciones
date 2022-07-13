import * as FileSystem from 'expo-file-system'

import { profileTypes } from "../types/index";

const {SAVE_PHOTO, DELETE_PHOTO} = profileTypes

//ver si se puede dejar privada porque despacha savePlace que seria saveProfilePicture
export const addProfilePicture = (photo) => ({
    type:SAVE_PHOTO,
    photo:photo
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
        dispatcher(addProfilePicture(path))
    }
}

export const deleteProfilePicture = () => ({
    type: DELETE_PHOTO
})