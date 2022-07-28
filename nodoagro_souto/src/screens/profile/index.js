import {Alert, Button, Image, ScrollView, Text, TextInput, View} from 'react-native'
import { countRows, queryResults, selectAllResults, truncateTable } from '../../db'
import { deleteProfilePicture, loadUser, saveProfilePicture, saveUserProfile } from '../../store/actions/index'
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
  const profilePicture = useSelector(state => state.profile.currentPhoto)
  const profileExists = useSelector(state => state.profile.profileExists)
  const userName = useSelector(state => state.profile.user_name)
  useEffect(() => {
    dispatcher(loadUser())
  }, [])
  


  const handleSavePhoto = (photo) => {
    dispatcher(saveProfilePicture(photo))
  }
 //Agregar path a photo
  const handleSaveProfile = (name,profilePicture, email) => {
    if(name === "" || email === ""){
      return Alert.alert("No se pueden cargar campos vacios")
    }
    dispatcher(saveUserProfile(name,profilePicture, email))
    setEmail("")
    setName("")
  }

  const handleDeleteProfile = async () =>{
    Alert.alert(
      "BORRAR TODOS LOS DATOS",
      "Está seguro de que quiere borrar los datos?",
      [
        {
          text: "CANCELAR",
          onPress: () => {}},
        {
          text: "SI",
          onPress:  () => {
            dispatcher(deleteProfilePicture())
            Alert.alert("Se borró el perfil")
          },
          style: "cancel",
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>{},
      }
    );
    
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
      <ScrollView contentContainerstyle={styles.inputBox}>
    <TextInput
      style={styles.inputs}
      onChangeText={setName}
      value={name}
      placeholder={"name"}
      />
    <TextInput
      style={styles.inputs}
      onChangeText={setEmail}
      value={email}
      placeholder={"email"}
      />
        
        <View style={styles.button}>
    {!profileExists ? (<Button
        
        title="Guardar"
        onPress={() => handleSaveProfile(name,profilePicture.uri, email)}/>)
          : (<Button
            title="BORRAR"
            onPress={() => handleDeleteProfile()} />) }
        </View>
        </ScrollView>
    </View>
    </View>
  )
}

export default Profile