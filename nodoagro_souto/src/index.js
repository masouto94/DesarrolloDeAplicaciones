// import {Categories} from './screens/categories/index'
// import {ProductDetail} from './screens/product-detail/index'
// import {Products} from './screens/products/index'
import { Categories, ProductDetail, Products } from './screens/index'

import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Root = () => {
  return (
    <View style={styles.container}>
        <Categories/>
    </View>
  )
}

export default Root