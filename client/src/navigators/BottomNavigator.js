import { View, Text, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'twrnc'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RecommendScreen from '../screens/RecommendScreen'
import SafeArea from '../components/SafeArea'
import SvgHomeOutline from '../../assets/icons/home_icon_184326.svg'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <SafeAreaView style={[tw`h-full w-full bg-white relative`, SafeArea.AndroidSafeArea]} edges={['top']}>
            {/* <SafeAreaView style={[tw`h-full w-full bg-white relative`]} > */}
            <View style={tw`w-full h-full`}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#000' }
                    }}
                >
                    <Tab.Screen
                        name="HomeTab"
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({ focused }) =>
                                <View style={tw`px-5`}>
                                    {focused ? (
                                        <SvgHomeOutline style={tw`text-white`} />
                                    ) : (
                                        <SvgHomeOutline style={tw`text-gray-600`} />
                                    )}
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen
                        name="RecommendTab"
                        component={RecommendScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({ focused }) =>
                                <View style={tw`px-5`}>
                                    <MaterialCommunityIcons
                                        name={focused ? 'play-box-multiple' : 'play-box-multiple-outline'}
                                        style={focused ? (tw`text-xl text-white`) : (tw`text-xl text-gray-600`)}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen
                        name="SearchTab"
                        component={SearchScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({ focused }) =>
                                <View style={tw`py-3 px-5`}>
                                    <Ionicons
                                        name={focused ? 'search' : 'search-outline'}
                                        style={focused ? (tw`text-xl text-white`) : (tw`text-xl text-gray-600`)}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen
                        name="ProfileTab"
                        component={ProfileScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({ focused }) =>
                                <View style={tw`py-3 px-5`}>
                                    <Feather
                                        name={'user'}
                                        style={focused ? (tw`text-xl text-white`) : (tw`text-xl text-gray-600`)}
                                    />
                                </View>
                            )
                        }}
                    />
                </Tab.Navigator>
            </View>
        </SafeAreaView >
    )
}

export default BottomNavigator