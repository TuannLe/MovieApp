import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import tw from 'twrnc'
import Watched from '../components/Profile/Watched'
import Favorites from '../components/Profile/Favorites'

const Tab = createMaterialTopTabNavigator()

export const TopNavigatorProfile = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: tw`h-12 bg-black`,
                tabBarIndicatorStyle: tw`bg-red-500`,
                tabBarShowLabel: true,
                tabBarLabelStyle: tw`text-white capitalize text-base`,
                tabBarShowIcon: false,
                tabBarBounces: false
            }}
        >
            <Tab.Screen
                name='Đang xem'
                component={Watched}
            />
            <Tab.Screen
                name='Xem sau'
                component={Favorites}
            />
        </Tab.Navigator>
    )
}