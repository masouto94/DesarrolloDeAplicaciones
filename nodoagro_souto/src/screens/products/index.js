import React, {useEffect} from 'react'
import { filterProducts, selectProduct } from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'

import { ProductList } from '../../components/index'
import {View} from 'react-native'
import {styles} from './styles'

const Products = ({navigation}) => {
  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.categories.selected)
  const filteredProducts = useSelector(state=> state.products.filtered)
  const selectedProduct = useSelector(state=> state.products.selected)
  

  useEffect(() => {
    dispatch(filterProducts(selectedCategory.id))
  }, [])

  const onSelectedProduct = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate('ProductDetail', {selectedProduct})
  }
  return (
    <View style={styles.container}>
      <ProductList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        onSelected={onSelectedProduct}/>
    </View>
  )
}

export default Products