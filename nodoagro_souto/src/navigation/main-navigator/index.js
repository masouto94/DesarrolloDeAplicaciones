import { Categories, ProductDetail, Products } from "../../screens/index";
import { isAndroid, isIos } from "../../constants/utils/index";

import React from "react";
import {colors} from '../../constants/themes/index'
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
        <Stack.Screen 
        name='Products' 
        component={Products}
        options={
          //Una prop {} que es un callback () de una prop {} que retorna () un objeto {}
          ({route}) => ({title: route.params.name})
        }/>
        <Stack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={
          //Una prop {} que es un callback () de una prop {} que retorna () un objeto {}
          ({route}) => ({title: route.params.name})
        }/>
    </Stack.Navigator>
  )
}

export default MainNavigator