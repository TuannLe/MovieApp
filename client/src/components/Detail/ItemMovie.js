import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function ItemMovie({ item }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const navigation = useNavigation()

    return (
        <View style={tw`mb-7`}>
            <View style={tw`flex flex-row`}>
                <TouchableOpacity
                    style={tw`flex flex-1 flex-row items-center`}
                >
                    <ImageBackground
                        source={{ uri: `data:image/png;base64,${item.poster}` }}
                        resizeMode="cover"
                        style={[
                            { width: SCREEN_WIDTH / 2.7, height: SCREEN_WIDTH / 3.7 },
                            tw`rounded overflow-hidden flex items-center justify-center`
                        ]}
                    >
                        <View style={tw`absolute`}>
                            <Ionicons name="play-circle-outline" size={34} style={tw`text-gray-300`} />
                        </View>
                    </ImageBackground>
                    <View style={tw`flex ml-3`}>
                        <Text style={tw`text-white text-base`}>{item.movieName}</Text>
                        <Text style={tw`text-gray-400`}>35p</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`m-auto p-2`}
                >
                    <Feather name="download" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={tw`mt-3`}>
                <Text
                    style={tw`text-gray-400`}
                    numberOfLines={3}
                >
                    {item.description}
                </Text>
            </View>
        </View>
    )
}