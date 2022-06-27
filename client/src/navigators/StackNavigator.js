import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'
import DetailScreen from '../screens/DetailScreen'
import PlayMovieScreen from '../screens/PlayMovieScreen'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeStack" component={BottomNavigator} />
            <Stack.Screen name="DetailStack" component={DetailScreen} />
            <Stack.Screen name="PlayMovieStack" component={PlayMovieScreen} />
        </Stack.Navigator>
    )
}