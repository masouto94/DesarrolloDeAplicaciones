import {Button, Image, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { ProductCard } from '../../components/index'
import React from 'react'
import { selectProduct } from '../../store/actions'
import {styles} from './styles'

const ProductDetail = ({navigation}) => {
  const product= useSelector(state => state.products.selected) 
  return (
    
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ProductCard item={product} onSelected={()=>{}}/>
        <Button
          title= "Añadir al carrito"/>
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
