import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function MovieItem({ item, handleVisible, setMovieIdSelected }) {
    const navigation = useNavigation()
    return (
        <View style={tw`flex-1 h-40`}>
            <TouchableOpacity
                onLongPress={() => {
                    handleVisible()
                    setMovieIdSelected(item._id)
                }}
                onPress={() => navigation.navigate('DetailStack', {
                    item: item
                })}
                style={tw`overflow-hidden rounded`}
            >
                <ImageBackground
                    source={{ uri: `data:image/png;base64,${item.poster}` }}
                    resizeMode="cover"
                    style={tw`w-full h-full`}
                />
            </TouchableOpacity>
        </View>
    )
}