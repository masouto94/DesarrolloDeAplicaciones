import {Text, TouchableOpacity, View} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { styles } from './styles'

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.cartContainer}>
     <View style={styles.cartItem}>
        <Text>{item.name}</Text>
        <View style={styles.quantity}>
        <Text>{item.quantity}</Text>
        </View>
    </View>
    <View style={styles.itemDelete}>
    <TouchableOpacity style={styles.cartDelete} onPress={onDelete}>
        <Ionicons style={styles.cartDeleteIcon} name={"trash-sharp"}/>
    </TouchableOpacity>
    </View>
    </View>

  )
}

export default CartItem