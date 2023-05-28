import { isAndroid, isIos } from "../../constants/utils/index";
import { Home } from "../../screens/index";
import React from "react";
import {colors} from '../../constants/themes/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator()



const HomeNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName='Home'
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
        name='HomeScreen' 
        component={Home}
        options={{ title: 'Página principal' }}
        
        />
    </Stack.Navigator>
    )
}

export default HomeNavigator