import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function MovieItem({ item }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <View style={tw`flex-1 h-40`}>
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
                    style={tw`w-full h-full`}
                />
            </TouchableOpacity>
        </View>
    )
}