import { isAndroid, isIos } from "../../constants/utils/index";

import { Profile } from '../../screens'
import React from "react";
import {colors} from '../../constants/themes/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
const ProfileNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Profile'
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
        name='Profile'
        component={Profile}
        options={
            {
                title: "Mi perfil"
            }
        }
        />
        </Stack.Navigator>
    )
}

export default ProfileNavigator