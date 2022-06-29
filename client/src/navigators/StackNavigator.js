import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'
import DetailScreen from '../screens/DetailScreen'
import PlayMovieScreen from '../screens/PlayMovieScreen'
import AuthScreen from '../components/Auth'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    // const currentUser = false

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="AuthStack" component={AuthScreen} />
            <Stack.Screen name="HomeStack" component={BottomNavigator} />
            <Stack.Screen name="DetailStack" component={DetailScreen} />
            <Stack.Screen name="PlayMovieStack" component={PlayMovieScreen} />


        </Stack.Navigator>
    )
}