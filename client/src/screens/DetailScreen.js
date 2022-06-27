import { View, Text, SafeAreaView, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { TopNavigator } from '../navigators/TopNavigator'
import VirtualizedScrollView from '../components/VitualizedScrollView'

export default function DetailScreen({ route, navigation }) {
    const { height: SCREEN_HEIGHT } = Dimensions.get('window')
    const { width: SCREEN_WIDTH } = Dimensions.get('window')

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            {/* // <VirtualizedScrollView
        //     style={tw`bg-black flex w-full h-full`}
        // > */}
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
                        onPress={() => setTimeout(() => navigation.navigate('PlayMovieStack'), 500)}
                    >
                        <Ionicons name="play-circle-outline" size={70} style={tw`text-gray-300`} />
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
                <View style={tw`flex px-2 w-full h-full`}>
                    <TouchableOpacity
                        onPress={() => setTimeout(() => navigation.navigate('PlayMovieStack'), 500)}
                        style={tw`flex flex-row items-center justify-center bg-white py-3 mt-3 rounded`}
                    >
                        <Ionicons name="ios-play" size={24} color="black" />
                        <Text style={tw`text-xl font-medium ml-2`}>Play</Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row justify-around my-5`}>
                        <TouchableOpacity
                            style={tw`p-3 rounded-full bg-gray-800`}
                        >
                            <Feather name="bookmark" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`p-3 rounded-full bg-gray-800`}
                        >
                            <AntDesign name="staro" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`p-3 rounded-full bg-gray-800`}
                        >
                            <Feather name="download" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`p-3 rounded-full bg-gray-800`}
                        >
                            <Ionicons name="share-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={tw`text-white text-lg`}>
                            Lãng Khách - Vagabond là bộ phim hành động kể về hai nhân vật vô tình biết được được những “bí mật đen” của quốc gia. Trong phim, Suzy sẽ vào vai nữ chính Go Hae Ri, một nhân viên tình báo thuộc Cơ quan Tình báo quốc gia.
                        </Text>
                        <Text style={tw`text-gray-400 text-base my-2`}>
                            Đạo diễn: Yoo In Shik
                        </Text>
                        <Text style={tw`text-gray-400 text-base`}>
                            Diễn viên: Lee Seung Gi, Suzy, Shin Sung Rok, Kim Min
                        </Text>
                    </View>
                    <View
                        style={[
                            { height: SCREEN_HEIGHT },
                            tw`flex`
                        ]}
                    >
                        <TopNavigator />
                    </View>
                </View>
            </SafeAreaView>
            {/* </VirtualizedScrollView> */}
        </ScrollView >
    )
}