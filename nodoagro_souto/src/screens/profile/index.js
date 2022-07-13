import {Button, Text, View} from 'react-native'

import ImageSelector from '../../components/image-selector'
import React from 'react'
import { styles } from './styles'

const Profile = () => {
  return (
    <View style={styles.container}>
    <ImageSelector onPhoto={(photo) => {console.log(photo)}}/>
    <Button
        title="Guardar"/>
    </View>
  )
}

export default Profile