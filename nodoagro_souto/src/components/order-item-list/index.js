import { FlatList } from 'react-native'
import {OrderDetail} from '../index'
import React from 'react'

const OrderItemList = ({ data, onSelected }) => {

    const renderOrders = ({ item }) => {
        return <OrderDetail item={item} onSelected={onSelected} />

    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderOrders} />
    )
}

export default OrderItemList