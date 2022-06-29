import {useDispatch, useSelector} from 'react-redux'

import { CategoryList } from '../../components/index'
import React from 'react'
import {View} from 'react-native'
import { selectCategory } from '../../store/actions/category.action'
import {styles} from './styles'

const Categories = ({navigation}) => {
  const dispatch = useDispatch()
  const CATEGORIES = useSelector(state => state.categories.all)
  const filteredProducts = useSelector(state => state.products.filtered)
  
  const onSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products', {
      name: item.title

    })
  }
  return (
    <View style={styles.container}>
      <CategoryList
        data={CATEGORIES}
        onSelected={onSelectedCategory}/>
    </View>
  )
}

export default Categories