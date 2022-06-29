import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function MovieItem({ item }) {
    const navigation = useNavigation()

    return (
        <View style={tw`flex-1 h-40`}>
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailStack', {
                    name: item.name,
                    category: item.category,
                    image: item.image,
                })}
                style={tw`overflow-hidden rounded`}
            >
                <ImageBackground
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={tw`w-full h-full`}
                />
            </TouchableOpacity>
        </View>
    )
}