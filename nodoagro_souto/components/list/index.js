import {FlatList, Text, TouchableOpacity, View} from 'react-native'

import ListItem from "../list-item";
import React from "react";
import { themes } from "../../constants/themes";

const List = ({header, data, ...props}) => {
  return (
    <FlatList
      ListHeaderComponent={header}
      data={data}
      renderItem={props.renderer}
      keyExtractor= {props.keyExtractor}
      style={props.style}
      />
  )
}

export default List