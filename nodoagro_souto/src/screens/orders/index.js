import * as ACTIONS from '../../store/actions'

import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {OrderList} from '../../components/index'
import { styles } from './styles'

const Orders = ({navigation}) => {
  const selectedOrder = useSelector(state => state.orders.selected)
  const cartConfirmed = useSelector(state => state.cart.confirm)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ACTIONS.fetchOrders())
  }, [cartConfirmed])

  const onHandleSelect = (item) => {
    dispatch(ACTIONS.selectOrder(item.id))
    navigation.navigate('OrderDetail', { selectedOrder })
  }


  const data= useSelector(state => state.orders.all)
  return (
    <View style={styles.container}>
      <OrderList
        data={data}
        keyExtractor={(item) => item.id} 
        onSelected={onHandleSelect} />

    </View>
  )
}

export default Orders