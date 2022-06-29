import React from 'react'
import TabNavigator from './navigation/tab-navigator/index'
import { View } from 'react-native'
import { styles } from './styles'

const Root = () => {
  return (
    <View style={styles.container}>
        <TabNavigator/>
    </View>
  )
}

export default Root