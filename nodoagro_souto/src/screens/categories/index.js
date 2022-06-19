import {CATEGORIES} from '../../constants/mock_data/index'
import { Category } from '../../components/index'
import React from 'react'
import {View} from 'react-native'
import {styles} from './styles'

const Categories = ({navigation,route}) => {
  const onSelectedCategory = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.title

    })
  }
  return (
    <View style={styles.container}>
      <Category
        data={CATEGORIES}
        onSelected={onSelectedCategory}/>
    </View>
  )
}

export default Categories