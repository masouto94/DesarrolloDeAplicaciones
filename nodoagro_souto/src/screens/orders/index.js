import { FlatList, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {OrderItem} from '../../components/index'
import React from 'react'
import { selectOrder } from '../../store/actions'
import { styles } from './styles'

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
  const dispatch = useDispatch()
  const data= useSelector(state => state.orders.all)
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