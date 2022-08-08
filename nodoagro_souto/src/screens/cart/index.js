import * as ACTIONS from '../../store/actions/index'

import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { CartItem } from '../../components/index'
import React from 'react'
import { styles } from './styles'
import { useEffect } from 'react'

const Cart = () => {
  const dispatcher = useDispatch()
  const items= useSelector(state => state.cart.items) 
  const total = useSelector(state => state.cart.total)
  const canConfirm = useSelector(state => state.cart.confirm)

  useEffect(() =>{
    dispatcher(ACTIONS.checkCart())
  })
  const onHandleDeleteCart = (id) => {
    dispatcher(ACTIONS.removeFromCart(id))
    dispatcher(ACTIONS.sumTotalPriceInCart())

  }

  const onHandleConfirmCart = () => {
    
    if (!canConfirm){
      alert("No hay nada cargado")
      return
    }
    dispatcher(ACTIONS.confirmCart(items, total))
  }

  const renderItem = ({item}) =>{
    return(
      <CartItem item={item} onDelete={() => onHandleDeleteCart(item.id)}/>
    )
  }

  return (
    <View style={styles.container}>
        <View>
          <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
          style={styles.cartConfirm}
          onPress={() => onHandleConfirmCart()}
          >
            <View>
            <Text style={styles.cartConfirmContent}>Confirmar</Text>
            </View>
            <View>
            <Text style={styles.cartConfirmContent}>Total: {total} </Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart