import {Button, Text, View} from 'react-native'

import React from 'react'
import {styles} from './styles'

const ProductDetail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
        <Text>ProductDetail</Text>
        <View style={styles.buttonsStyle}>
        <Button 
          title= "Atrás"
          onPress={()=> navigation.goBack()}/>
        <Button 
          title= "Volver a inicio"
          onPress={()=> navigation.popToTop()}/>
          </View>
    </View>
  )
}

export default ProductDetail