import {Button, Image, View} from 'react-native'

import { ProductCard } from '../../components/index'
import React from 'react'
import {styles} from './styles'

const ProductDetail = ({navigation, route}) => {
  const product= route.params.item 
  return (
    
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ProductCard item={product} onSelected={()=>{}}/>
        </View>
        <Image style={styles.image}
        source={{uri:product.image}}/>
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
