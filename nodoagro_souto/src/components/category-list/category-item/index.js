import {Text, TouchableOpacity, View} from 'react-native'

import React from "react";
import {themes} from './styles'

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={themes.itemContainer}>
      <TouchableOpacity onPress={() => onSelected(item)}
      style={{...themes.item, backgroundColor: item.color}}>
        <View>
          <Text style={themes.title}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryItem