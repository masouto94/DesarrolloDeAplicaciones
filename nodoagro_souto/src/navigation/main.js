import { Categories, ProductDetail, Products } from "../screens/index";
import { isAndroid, isIos } from "../constants/utils/index";

import React from "react";
import {colors} from '../constants/themes/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Categories'
      screenOptions={
        {
          headerStyle: {
            backgroundColor: isIos() ? colors.secondary : colors.background
          },
          headerTintColor: isAndroid() ? colors.text : colors.black,
          headerTitleStyle: {
            fontFamily: 'Lato-Bold'
          }
        }
      }>
        <Stack.Screen
        name='Categorías' 
        component={Categories}
        />
        <Stack.Screen name='Products' component={Products}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
    </Stack.Navigator>
  )
}

export default MainNavigator