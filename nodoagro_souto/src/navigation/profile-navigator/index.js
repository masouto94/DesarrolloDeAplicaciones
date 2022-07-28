import React, { useEffect } from "react";
import { isAndroid, isIos } from "../../constants/utils/index";

import { Profile } from '../../screens'
import {colors} from '../../constants/themes/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux"

const Stack = createNativeStackNavigator()
const ProfileNavigator = () => {
    const userName = useSelector(state => state.profile.user_name)
    useEffect(() => {

    }, [userName])
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
                title:  userName  ? `Perfil de ${userName}` : "Mi perfil"
            }
        }
        />
        </Stack.Navigator>
    )
}

export default ProfileNavigator