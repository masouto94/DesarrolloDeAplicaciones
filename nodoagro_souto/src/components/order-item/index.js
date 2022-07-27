import {Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import { styles } from './styles'

const formatDate = (time) => {
  let date = new Date(time)
  return date.toLocaleDateString() 
}
const OrderItem = ({item, onSelect}) => {
  return (
    <View style={styles.orderContainer}>
     <View style={styles.orderItem}>
      <TouchableOpacity style={styles.orderSelect} onPress={onSelect}>
        <View style={styles.orderPiece}>
          <Text>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.orderPiece}>
          <Text>${item.total}</Text>
        </View>
        </TouchableOpacity>
     </View>

    </View>

  )
}

export default OrderItem