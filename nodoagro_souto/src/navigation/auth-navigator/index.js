import { Auth } from "../../screens/index";
import { isAndroid, isIos } from "../../constants/utils/index";

import React from "react";
import {colors} from '../../constants/themes/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()



const AuthNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Login'
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
        name='Autenticacion' 
        component={Auth}
        
        />
        
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator