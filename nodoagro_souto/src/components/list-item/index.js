import {Text, TouchableOpacity, View} from 'react-native'

import React from 'react'

const ListItem = ({props}) => {
  return (
    <View key={`task-${props.item.id}`}>
        <Text style={props.textStyle}>{props.item.value}</Text>
        <TouchableOpacity 
        style={themes.deleteButton}
        onPress={props.callback}>
          <Text style={themes.text}>
            X
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default ListItem