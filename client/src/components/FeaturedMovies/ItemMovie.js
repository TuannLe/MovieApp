import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
// import {LinearGradient} from 'expo-linear-gradient'

export default function ItemMovie({ item }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailStack', {
                name: item.name,
                category: item.category,
                image: item.image,
            })}
        >
            <ImageBackground
                source={{ uri: item.image }}
                resizeMode="cover"
                style={[
                    { width: SCREEN_WIDTH / 2.4, height: SCREEN_WIDTH * 0.6 },
                    tw`rounded-sm overflow-hidden justify-end mr-2`
                ]}
            />
        </TouchableOpacity>
    )
}