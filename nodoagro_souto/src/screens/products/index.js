import {Button, Text, View} from 'react-native'

import React from 'react'
import {styles} from './styles'

const Products = ({navigation, route}) => {
  return (
    <View style={styles.container}>
        <Text>Products</Text>
        <Button
          title="Ir a Detalle"
          onPress={() => navigation.navigate('ProductDetail')}/>

    </View>
  )
}

export default Products