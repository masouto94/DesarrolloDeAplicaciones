import { FlatList, Text, View } from 'react-native'

import { CartItem } from '../../components'
import React from 'react'
import {cart} from '../../constants/mock_data/index'

const Cart = () => {
  const items= cart
  const total = 120
  
  const onHandleDeleteCart = (id) =>{
    console.log(id)
  }

  const onHandleConfirmCart = (items) => {
    console.log(items)
  }

  const renderItem = ({item}) =>{
    return(
      <CartItem item={item} onDelete={onHandleDeleteCart}/>
    )
  }

  return (
    <View>
        <View>
          <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
        </View>
    </View>
  )
}

export default Cart