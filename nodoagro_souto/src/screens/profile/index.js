import {Button, Image, Text, TextInput, View} from 'react-native'
import { saveProfilePicture, saveUserProfile } from '../../store/actions/index'
import {useDispatch, useSelector} from 'react-redux'

import ImageSelector from '../../components/image-selector'
import React from 'react'
import { styles } from './styles'
import { useState } from 'react'

const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const dispatcher = useDispatch()
  const profilePicture = useSelector(state => state.profile.currentPhoto)

  const handleSavePhoto = (photo) => {
    dispatcher(saveProfilePicture(photo))
  }
 //Agregar path a photo
  const handleSaveProfile = (name,profilePicture, email) => {
    dispatcher(saveUserProfile(name,profilePicture, email))
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Image style={{flex:1}} source={profilePicture}/>
      </View>
    <ImageSelector onPhoto={(photo) => handleSavePhoto(photo)}/>
    <View style={styles.container}>
    <TextInput
      style={{flex:0.5}}
      onChangeText={setName}
      value={"name"}
      />
    <TextInput
      style={{flex:0.5}}
      onChangeText={setEmail}
      value={"email"}
      />
    <Button
        title="Guardar"
        onPress={() => handleSaveProfile(name,profilePicture, email)}/>
    </View>
    </View>
  )
}

export default Profile