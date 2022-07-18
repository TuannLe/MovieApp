import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import BottomNavigator from './BottomNavigator'
import DetailScreen from '../screens/DetailScreen'
import PlayMovieScreen from '../screens/PlayMovieScreen'
import AuthScreen from '../components/Auth'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {token ? (
                <>
                    <Stack.Screen name="HomeStack" component={BottomNavigator} />
                    <Stack.Screen name="DetailStack" component={DetailScreen} />
                    <Stack.Screen name="PlayMovieStack" component={PlayMovieScreen} />
                </>
            ) : (
                <Stack.Screen name="AuthStack" component={AuthScreen} />
            )}


        </Stack.Navigator>
    )
}