import { FlatList } from 'react-native'
import ProductCard from './product-card'
import React from 'react'

const ProductList = ({data, onSelected}) => {
  
  const renderProducts = ({item}) => {
    return <ProductCard item={item} onSelected={onSelected}/>

  }
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id === item.categoryID}
    renderItem={renderProducts}/>
  )
}

export default ProductList