import {Button, Image, Text, TextInput, View} from 'react-native'
import { countRows, queryResults, selectAllResults, truncateTable } from '../../db'
import { loadUser, saveProfilePicture, saveUserProfile } from '../../store/actions/index'
import {useDispatch, useSelector} from 'react-redux'

import ImageSelector from '../../components/image-selector'
import React from 'react'
import { styles } from './styles'
import { useEffect } from 'react'
import { useState } from 'react'

const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dispatcher = useDispatch()
  const currentEmail = useSelector(state => state.profile.email)
  const profilePicture = useSelector(state => state.profile.currentPhoto)
  const profileExists = useSelector(state => state.profile.profileExists)
  useEffect(() => {
    dispatcher(loadUser())
  }, [])
  

  const ver =  async () => {
    const user = await selectAllResults('profiles')
      .then((res) => res.rows.item(0))
      console.log(user)

  }

  const contar = () => {
    countRows('profiles', 'email')
    .then((res) => {
      console.log("COUNT")
      console.log(parseInt(Object.values(res.rows.item(0))))
    })
    .then(
      queryResults('profile_picture', 'profiles').then(
        (res) => console.log("PIC",Object.values(res.rows.item(0)).toString())
      ))
 
  }

  const borrar = () => {
    setEmail("")
    setName("")
    truncateTable('profiles')
      .then((res) => {
        console.log("DELETED")
      })
      .then(ver())

  }
  const handleSavePhoto = (photo) => {
    dispatcher(saveProfilePicture(photo))
  }
 //Agregar path a photo
  const handleSaveProfile = (name,profilePicture, email) => {
    dispatcher(saveUserProfile(name,profilePicture, email))
    setEmail("")
    setName("")
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {profilePicture
          ? <Image style={styles.container} source={profilePicture} /> 
          : (<View style={styles.placeHolder}>
              <Text style={styles.placeHolderText}>Seleccione una imagen</Text>
            </View>)
        }
        
      </View>
    <ImageSelector onPhoto={(photo) => handleSavePhoto(photo)}/>
    <View style={styles.container}>
    <TextInput
      style={{flex:0.5}}
      onChangeText={setName}
      value={name}
      placeholder={"name"}
      />
    <TextInput
      style={{flex:0.5}}
      onChangeText={setEmail}
      value={email}
      placeholder={"email"}
      />
    <Button
        title="Guardar"
        onPress={() => handleSaveProfile(name,profilePicture.uri, email)}/>
        <View style={{margin:10}}>
          <Button
          title="VER"
            onPress={() => ver()}/>
          <Button
            title="BORRAR"
            onPress={() => borrar()} />            
        </View>
    </View>
    </View>
  )
}

export default Profile