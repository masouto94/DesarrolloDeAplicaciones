import {Text, TouchableOpacity, View} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { styles } from './styles'

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.cartContainer}>
     <View style={styles.cartItem}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
     </View>
    <TouchableOpacity style={styles.cartDelete} onPress={onDelete}>
        <Ionicons name={"trash-sharp"}/>
    </TouchableOpacity>
    </View>

  )
}

export default CartItem