import {Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import {formatDate} from '../../utils/index'
import { styles } from './styles'

const OrderItem = ({item, onSelect}) => {
  return (
    <View style={styles.orderContainer}>
     <View style={styles.orderItem}>
      <TouchableOpacity style={styles.orderSelect} onPress={() => onSelect(item)}>
        <View style={styles.orderPieceLeft}>
          <Text style={styles.orderText}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.orderPieceRight}>
          <Text style={styles.orderText}>${item.total}</Text>
        </View>
        </TouchableOpacity>
     </View>

    </View>

  )
}

export default OrderItem