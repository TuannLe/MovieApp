import { View, Text, SafeAreaView, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')

    return (
        <SafeAreaView>
            <ImageBackground
                source={{ uri: route.params.image }}
                style={[
                    { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.4 },
                    tw`items-center justify-center relative`
                ]}
                resizeMode="cover"
            >
                <TouchableOpacity
                    style={tw`z-100`}
                >
                    <Ionicons name="play-circle-outline" size={70} style={tw`text-gray-400`} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`absolute top-10 left-3`}
                >
                    <Ionicons name="chevron-back" size={26} color="white" />
                </TouchableOpacity>
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.00005)", "rgba(0, 0, 0, 1)"]}
                    style={tw`w-full h-70 justify-end absolute px-2 bottom-0 right-0 left-0`}
                >
                    <Text style={tw`text-white text-3xl font-medium`}>{route.params.name}</Text>
                    <View style={tw`flex flex-row items-center py-1`}>
                        <Text style={tw`text-gray-400 text-base`}>2h28m</Text>
                        <Text style={tw`px-2 ml-2 font-medium bg-yellow-400 rounded-sm`}>HD</Text>
                    </View>
                    <View style={tw`pb-3`}>
                        <FlatList
                            data={route.params.category}
                            renderItem={({ item }) => <Text style={tw`text-gray-400 text-base`}>{item + '  '}</Text>}
                            horizontal
                        />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </SafeAreaView>
    )
}