import React from 'react'
import TabNavigator from './navigation/tab-navigator/index'
import AuthNavigator from './navigation/auth-navigator/index'
import { View } from 'react-native'
import { init, } from './db'
import { styles } from './styles'
import { useSelector } from 'react-redux'

init()
  .then(() => {
    console.log("DB IS UP")
  })
  .catch((err) => {
    console.log(err)
  })




const Root = () => {
  const authTrue = useSelector(state => state.auth.authenticated)
  return (
    <View style={styles.container}>
      {authTrue ?
        (<TabNavigator />)
        : (<AuthNavigator />)
      }
    </View>
  )
}

export default Root