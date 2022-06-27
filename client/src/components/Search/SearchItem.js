import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchItem({ item }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailStack', {
                name: item.name,
                category: item.category,
                image: item.image,
            })}
            style={tw`flex flex-row items-center mt-3`}
        >
            <ImageBackground
                source={{ uri: item.image }}
                resizeMode="cover"
                style={[
                    { width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 4 },
                    tw`rounded-sm overflow-hidden justify-end rounded`
                ]}
            />
            <Text style={tw`text-white flex-1 mx-2 text-base`}>{item.name}</Text>
            <Ionicons name="play-circle-outline" size={40} style={tw`text-gray-300`} />
        </TouchableOpacity>
    )
}