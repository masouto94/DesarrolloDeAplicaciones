import { isAndroid, isIos } from "../../constants/utils/index";

import { Cart } from '../../screens/index'
import React from 'react'
import { colors } from "../../constants/themes";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='Cart'
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
        name='Tu compra' 
        component={Cart}
        />
    </Stack.Navigator>
  )
}

export default CartNavigator