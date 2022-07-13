import {Button, Image, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import ImageSelector from '../../components/image-selector'
import React from 'react'
import { saveProfilePicture } from '../../store/actions/index'
import { styles } from './styles'

const Profile = () => {
  const dispatcher = useDispatch()
  const profilePicture = useSelector(state => state.profile.current)
  const handleSavePhoto = (photo) => {
    dispatcher(saveProfilePicture(photo))
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Image style={{flex:1}} source={profilePicture}/>
      </View>
    <ImageSelector onPhoto={(photo) => handleSavePhoto(photo)}/>
    <Button
        title="Guardar"
        onPress={() => console.log(profilePicture)}/>
    </View>
  )
}

export default Profile