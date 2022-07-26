import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import {Alert, Button, Image, Text, View} from 'react-native'

import React from 'react'
import { colors } from '../../constants/themes'
import { styles } from './styles'

const ImageSelector = ({onPhoto}) => {

    const verifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== "granted"){
            Alert.alert("Se requiere dar permiso a la cámara",[{text:'OK'}])
            return false
        }
        return true
    }
    const handleTakePhoto = async () =>{
        const permissionsGrantedForCamera = await verifyPermissions()
        if (!permissionsGrantedForCamera){
            return
        }
        const photo = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        })

        onPhoto(photo.uri)

    }
    
        return (
        <View style={styles.container}>
            <Button
                title='Tomar Foto'
                onPress={handleTakePhoto}
                color={colors.primary}/>
        </View>
    )
}

export default ImageSelector