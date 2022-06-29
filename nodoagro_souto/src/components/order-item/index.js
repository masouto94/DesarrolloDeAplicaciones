import {Text, TouchableOpacity, View} from 'react-native'

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
        <Text>Borrar</Text>
    </TouchableOpacity>
    </View>

  )
}

export default OrderItem