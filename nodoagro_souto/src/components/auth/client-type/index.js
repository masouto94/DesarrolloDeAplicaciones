import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../../../store/actions/index'

import * as TYPES from '../../../constants/mock_data/index'

const ClientTypeSelector = () => {
  const dispatch = useDispatch()
  const selected = useSelector((state) => state.auth.selectClientType)
  const selectUser = (clientType) =>{
    dispatch(ACTIONS.selectClientType(clientType))
    console.log(selected)
  }

  const renderClientType = ({ item }) => {
    return(
    <View style={styles.clientTypeList}>
      <TouchableOpacity onPress={() => selectUser(item.name)} >
        <Text  style={styles.textMenu}>Soy {(item.label).toLowerCase()}</Text>
      </TouchableOpacity>
    </View>
    )
  }
  return (
    <View>
    <FlatList
      data={TYPES.CLIENT_TYPES}
      keyExtractor={(item) => item.id}
      renderItem={renderClientType} />
    </View>

  )
}

export default ClientTypeSelector