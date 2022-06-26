import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import tw from 'twrnc'
import ListMovie from '../components/Detail/ListMovie'
import SimilarMovies from '../components/Detail/SimilarMovies'
import Comments from '../components/Detail/Comments'

const Tab = createMaterialTopTabNavigator()

export const TopNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: tw`h-12 bg-black`,
                tabBarIndicatorStyle: tw`bg-red-500`,
                tabBarShowLabel: true,
                tabBarLabelStyle: tw`text-white capitalize`,
                tabBarShowIcon: false,
                tabBarBounces: false
            }}
        >
            <Tab.Screen
                name='Các tập'
                component={ListMovie}
            />
            <Tab.Screen
                name='Tương tự'
                component={SimilarMovies}
            />
            <Tab.Screen
                name='Bình luận'
                component={Comments}
            />
        </Tab.Navigator>
    )
}