import { init, populateMock, select } from './db'

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
populateMock("usuario1","foto1","email1")
populateMock("usuario2","foto2","email2")
populateMock("usuario3","foto3","email3")

select()
  .then((res) => {
    console.log("USUARIOS")
    console.log(res)
  })

const Root = () => {
  return (
    <View style={styles.container}>
        <TabNavigator/>
    </View>
  )
}

export default Root