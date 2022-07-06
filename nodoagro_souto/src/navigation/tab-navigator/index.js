import *  as ACTIONS from '../../store/actions/index'

import { Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

import CartNavigator from '../cart-navigator/index'
import Ionicons from '@expo/vector-icons/Ionicons';
import MainNavigator from '../main-navigator/index'
import { NavigationContainer } from '@react-navigation/native'
import OrdersNavigator from '../orders-navigator/index'
import React from 'react'
import { colors } from '../../constants/themes'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {styles} from './styles'
import { useEffect } from 'react';

const BottomTabs = createBottomTabNavigator()

const LabelBottomTab = (focused, label) => (
    <Text style={{
        color: focused ? colors.primary : colors.secondary,
        fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
    }}>{label}</Text>
)
const TabNavigator = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ACTIONS.anyLoadedOrder())
      }, [])

    const hasOrders = useSelector(state => state.orders.any)
    const ordersTrayIcons = hasOrders ? "file-tray-full" : "file-tray"
  return (
    <NavigationContainer>
    <BottomTabs.Navigator
    initialRouteName='TiendaMain'
    screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
    }}
    >

        <BottomTabs.Screen
        name='Tienda'
        component={MainNavigator}
        options={{
            tabBarLabel: ({focused}) => LabelBottomTab(focused, 'Tienda'),
            tabBarIcon: ({focused}) => (
                <View style={styles.container}>
                    <Ionicons name={focused ? "home-sharp" : "home-outline"}
                    size={32}
                    color={focused ? colors.secondary : colors.primary}/>
                </View>
            )
        }}

        />


        <BottomTabs.Screen
        name='Carrito'
        component={CartNavigator}
        options={{
            tabBarLabel: ({focused}) => LabelBottomTab(focused, 'Carrito'),
            tabBarIcon: ({focused}) => (
                <View style={styles.container}>
                    <Ionicons name={focused ? "basket-sharp" : "basket-outline"}
                    size={32}
                    color={focused ? colors.secondary : colors.primary}/>
                </View>
            )
        }}/>

        <BottomTabs.Screen
        name='Ordenes'
        component={OrdersNavigator}
        options={{
            tabBarLabel: ({focused}) => LabelBottomTab(focused, 'Ordenes'),
            tabBarIcon: ({focused}) => (
                <View style={styles.container}>
                    <Ionicons name={focused ? `${ordersTrayIcons}-sharp` : `${ordersTrayIcons}-outline`}
                    size={32}
                    color={focused ? colors.secondary : colors.primary}/>
                </View>
            )
        }}/>

    </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator