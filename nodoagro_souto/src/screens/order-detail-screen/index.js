import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { OrderItemList } from '../../components'
import React from 'react'
import { selectProduct } from '../../store/actions'
import { styles } from './styles'

const OrderDetailScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const selectedProduct = useSelector(state => state.products.selected)

  const onSelectedProduct = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate('ProductDetail', { selectedProduct })
  }
  const selectedOrder = useSelector(state => state.orders.selected)
  return (
    <View style={styles.container}>
      <View style={styles.totalPriceBanner}>
        <Text style={styles.totalPriceText}>
          {`El total de esta orden es\n${selectedOrder.total}`}
          </Text>
        </View>
      <View>
        <OrderItemList
          data={selectedOrder.items}
          keyExtractor={(item) => item.id}
          onSelected={onSelectedProduct}/>
      </View>
      </View>
  )
}

export default OrderDetailScreen