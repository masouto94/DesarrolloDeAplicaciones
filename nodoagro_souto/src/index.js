import React from 'react'
import TabNavigator from './navigation/tab-navigator/index'
import { View } from 'react-native'
import { init, } from './db'
import { styles } from './styles'

init()
  .then(() => {
    console.log("DB IS UP")
  })
  .catch((err) => {
    console.log(err)
  })




const Root = () => {
  return (
    <View style={styles.container}>
        <TabNavigator/>
    </View>
  )
}

export default Root