import {Button, Text, View} from 'react-native'

import { ProductCard } from '../../components/index'
import React from 'react'
import {styles} from './styles'

const ProductDetail = ({navigation, route}) => {
  const product= route.params.item 
  return (
    <View style={styles.container}>
        <ProductCard item={product} onSelected={()=>{}}/>
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
