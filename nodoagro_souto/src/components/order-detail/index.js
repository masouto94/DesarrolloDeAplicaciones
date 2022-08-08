import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { themes } from './styles'

const OrderCard = ({ item, onSelected }) => {
    return (
        <View style={themes.container}>
            <TouchableOpacity onPress={() => onSelected(item)}
                style={themes.item}>
                <View style={themes.card}>
                    <Text style={themes.title}>
                        {item.name}
                    </Text>
                    <Text style={themes.description}>
                        {item.description}
                    </Text>
                    <Text style={themes.price}>
                        {`Unitario: ${item.price} -- Cantidad: ${item.quantity}`}
                    </Text>
                    <Text style={themes.price}>
                        {}
                    </Text>
                    <Text style={themes.price}>
                        {`Total ${item.quantity * item.price}`}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default OrderCard

