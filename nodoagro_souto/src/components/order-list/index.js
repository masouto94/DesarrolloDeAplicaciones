import { FlatList } from 'react-native'
import { OrderItem } from '../index'
import React from 'react'

const OrderList = ({ data, onSelected }) => {

    const renderOrders = ({ item }) => {
        return <OrderItem item={item} onSelect={onSelected}/>
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderOrders} />
    )
}

export default OrderList