import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { CartItem } from '../../components/index'
import React from 'react'
import {cart} from '../../constants/mock_data/index'
import { styles } from './styles'

const Cart = () => {
  const items= cart 
  const total = items.reduce((prev, item) => prev+item.price,0 )
  
  const onHandleDeleteCart = (id) => {
    console.log(id)
  }

  const onHandleConfirmCart = (items) => {
    console.log(items)
  }

  const renderItem = ({item}) =>{
    return(
      <CartItem item={item} onDelete={() => onHandleDeleteCart(item)}/>
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
          onPress={() => onHandleConfirmCart(items)}
          >
            <Text>
              Confirmar
            </Text>
            <View>
              <Text>Total: {total} </Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart