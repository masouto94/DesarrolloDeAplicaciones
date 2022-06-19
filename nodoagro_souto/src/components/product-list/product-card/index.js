import {Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import { themes } from './styles'

const ProductCard = ({item, onSelected}) => {
  return (
    <View style={themes.container}>
        <TouchableOpacity onPress={() => onSelected(item)}
      style={themes.item}>
        <View style={themes.card}>
          <Text style={themes.title}>
            {item.name}
          </Text>
          <Text style={themes.description}>
            {item.description}
          </Text>
          <Text style={themes.price}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductCard

