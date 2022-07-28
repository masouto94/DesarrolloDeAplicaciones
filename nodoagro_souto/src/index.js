import { init, populateMock, selectAllResults } from './db'

import React from 'react'
import TabNavigator from './navigation/tab-navigator/index'
import { View } from 'react-native'
import { styles } from './styles'

init()
  .then(() => {
    console.log("DB IS UP")
    console.log()
  })
  .catch((err) => {
    console.log(err)
  })


selectAllResults("profiles")
  .then((res) => {
    console.log("USUARIOS")
    console.log(res)
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