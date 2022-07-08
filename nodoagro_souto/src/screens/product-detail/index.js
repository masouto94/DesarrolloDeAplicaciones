import  * as ACTIONS from '../../store/actions'

import {Button, Image, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { ProductCard } from '../../components/index'
import React from 'react'
import {styles} from './styles'

const ProductDetail = ({navigation}) => {
  const dispatcher = useDispatch()
  const product= useSelector(state => state.products.selected) 

  const onHandleAddToCart = () => {
    dispatcher(ACTIONS.addToCart(product))
    dispatcher(ACTIONS.sumTotalPriceInCart())

  }
  return (
    
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ProductCard item={product} onSelected={()=>{}}/>
        <Button
          title= "Añadir al carrito"
          onPress={onHandleAddToCart}/>
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
