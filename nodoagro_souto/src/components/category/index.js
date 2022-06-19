import {CategoryItem} from '../index'
import { FlatList } from 'react-native'
import React from 'react'

const Category = ({data, onSelected}) => {

    const renderCategoryItem = ({item}) => {
        return(
        <CategoryItem item={item} onSelected={onSelected}/>
        )
    }
    return (

        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}/>
    )
}

export default Category