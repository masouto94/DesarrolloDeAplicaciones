import {FlatList, Text, TouchableOpacity, View} from 'react-native'

import ListItem from "../list-item";
import React from "react";
import { themes } from "../../constants/themes";

const renderItem = ({item}) => {
  return (
  <View key={`task-${item.id}`}>
    <Text>{item.value}</Text>
    <TouchableOpacity 
    style={themes.deleteButton}
    onPress={() => onHandleModal(item.id)}>
      <Text style={themes.deleteText}>
        X
      </Text>
    </TouchableOpacity>
  </View>)
}

const List = ({header, data, ...props}) => {
  return (
    <FlatList
      ListHeaderComponent={header}
      data={data}
      renderItem={renderItem}
      keyExtractor= {props.keyExtractor}
      style={props.style}
      />
  )
}

export default List