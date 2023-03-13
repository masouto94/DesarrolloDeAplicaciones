import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
const ClientTypeSelector = ({ clientType, onPress }) => {
  

  const renderClientType = ({ item }) => {
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={onPress(item.name)}>
        <Text>Soy {item.label}</Text>
      </TouchableOpacity>
    </View>
  }
  return (
    <FlatList
      data={clientType}
      keyExtractor={(item) => item.id}
      renderItem={renderClientType} />


  )
}

export default ClientTypeSelector