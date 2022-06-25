import { Text, View } from 'react-native'

import CartNavigator from '../cart-navigator/index'
import Ionicons from 'ionicons'
import MainNavigator from '../main-navigator/index'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { colors } from '../../constants/themes'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {styles} from './styles'

const BottomTabs = createBottomTabNavigator()

const LabelBottomTab = (focused, label) => (
    <Text style={{
        color: focused ? colors.primary : colors.secondary,
        fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
    }}>{label}</Text>
)
const TabNavigator = () => {
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
            tabBarIcon: ({focused}) => focused ? <Text>TIENDA</Text> : <Text>tienda</Text>
        }}

        />

        {/* 
        Así, poniendo tal como lo tiene el repo de breashopapp, me queda en blanco
        pero retiene la funcnionalidad, no entiendo qué es lo que está mal pero me dice
        que jsx no es una expresión válida. Sospecho que es un problema con el IONICONS
        porque si pongo la expresión de arriba sí me anda

        <BottomTabs.Screen
        name='Tienda'
        component={MainNavigator}
        options={{
            tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Tienda'),
            tabBarIcon: ({ focused }) => {(
                <Ionicons name={ focused ? 'home' : 'home-outline'}
                size={20} 
                color={focused ? colors.secondary : colors.primary} 
                />
            )}
        }}
        /> */}

        <BottomTabs.Screen
        name='Carrito'
        component={CartNavigator}
        options={{
            tabBarLabel: ({focused}) => LabelBottomTab(focused, 'Carrito'),
            tabBarIcon: ({focused}) => focused ? <Text>CARRITO</Text> : <Text>carrito</Text>
        }}/>

    </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator