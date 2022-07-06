import {Text, TouchableOpacity, View} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { styles } from './styles'

const formatDate = (time) => {
  let date = new Date(time)
  return date.toLocaleDateString() 
}
const OrderItem = ({item, onSelect, onDelete}) => {
  return (
    <View style={styles.orderContainer}>
     <View style={styles.orderItem}>
      <TouchableOpacity style={styles.orderSelect} onPress={onSelect}>
        <Text>{formatDate(item.date)}</Text>
        <Text>{item.total}</Text>
        </TouchableOpacity>
     </View>
    <TouchableOpacity style={styles.orderDelete} onPress={onDelete}>
      <Ionicons name={"trash-sharp"}/>
    </TouchableOpacity>
    </View>

  )
}

export default OrderItem