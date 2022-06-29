import { FlatList, Text, View } from 'react-native'

import {OrderItem} from '../../components/index'
import React from 'react'
import {orders} from '../../constants/mock_data/index'
import { styles } from './styles'

const data=orders

const onHandleSelect = (item) =>{
  console.log(item)
}

const onHandleDelete = (item) =>{
  console.log(item)
}

const renderItem = ({item}) => {
  return(
    <OrderItem 
    item={item} 
    onSelect={() => onHandleSelect(item)} 
    onDelete={() => onHandleDelete(item)}
    />
  )
}
const Orders = () => {
  return (
    <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default Orders