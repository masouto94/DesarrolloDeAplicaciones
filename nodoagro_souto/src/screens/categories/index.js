import {Button, Text, View} from 'react-native'

import React from 'react'
import {styles} from './styles'

const Categories = ({navigation,route}) => {
  return (
    <View style={styles.container}>
        <Text>Categories</Text>
        <Button
          title="Ir a productos" 
          onPress={()=> navigation.navigate('Products')}></Button>
    </View>
  )
}

export default Categories