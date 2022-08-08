import { OrderDetailScreen, Orders } from '../../screens/index'
import { isAndroid, isIos } from "../../constants/utils/index";

import React from 'react'
import { colors } from "../../constants/themes";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { formatDate } from '../../utils';
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  const orderDate = useSelector(state => state.orders.selected)
  return (
    <Stack.Navigator
    initialRouteName='Orders'
      screenOptions={
        {
          headerStyle: {
            backgroundColor: isIos() ? colors.secondary : colors.background
          },
          headerTintColor: isAndroid() ? colors.text : colors.black,
          headerTitleStyle: {
            fontFamily: 'Lato-Bold'
          }
        }}>
        <Stack.Screen
        name='Órdenes' 
        component={Orders}
        />

        <Stack.Screen
          name='OrderDetail'
          component={OrderDetailScreen}
          options={
            {
              title: orderDate ? formatDate(orderDate.date): ""
            }
          }
        />
    </Stack.Navigator>
  )
}

export default OrdersNavigator