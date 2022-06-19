import {PRODUCTS} from '../../constants/mock_data/index'
import { ProductList } from '../../components/index'
import React from 'react'
import {View} from 'react-native'
import {styles} from './styles'

const Products = ({navigation,route}) => {
  const filteredProducts = PRODUCTS.filter(item => item.categoryID === route.params.categoryID)
  const onSelectedProduct = (item) => {
    navigation.navigate('ProductDetail', {item})
  }
  return (
    <View style={styles.container}>
      <ProductList
        data={filteredProducts}
        keyExtractor={item => item.id}
        onSelected={onSelectedProduct}/>
    </View>
  )
}

export default Products