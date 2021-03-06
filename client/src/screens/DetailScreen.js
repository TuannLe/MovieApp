import { View, Text, SafeAreaView, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import SimilarMovies from '../components/Detail/SimilarMovies'
import Comments from '../components/Detail/Comments'

export default function DetailScreen({ route, navigation }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const [isActiveSimilar, setIsActiveSimilar] = useState(true)
    const [isActiveComments, setIsActiveComments] = useState(false)

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
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
                            <Text style={tw`px-2 ml-2 font-medium bg-yellow-400 rounded overflow-hidden`}>HD</Text>
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
                            L??ng Kh??ch - Vagabond l?? b??? phim h??nh ?????ng k??? v??? hai nh??n v???t v?? t??nh bi???t ???????c ???????c nh???ng ???b?? m???t ??en??? c???a qu???c gia. Trong phim, Suzy s??? v??o vai n??? ch??nh Go Hae Ri, m???t nh??n vi??n t??nh b??o thu???c C?? quan T??nh b??o qu???c gia.
                        </Text>
                        <Text style={tw`text-gray-400 text-base my-2`}>
                            ?????o di???n: Yoo In Shik
                        </Text>
                        <Text style={tw`text-gray-400 text-base`}>
                            Di???n vi??n: Lee Seung Gi, Suzy, Shin Sung Rok, Kim Min
                        </Text>
                    </View>
                    <View style={tw`mt-4`}>
                        <View style={tw`flex flex-row justify-around`}>
                            <TouchableOpacity
                                style={isActiveSimilar ? (tw`py-3 border-t-2 border-red-500 flex-1`) : (tw`py-3 flex-1`)}
                                onPress={() => {
                                    setIsActiveSimilar(true);
                                    setIsActiveComments(false)
                                }}
                            >
                                <Text style={tw`text-white text-center text-lg font-medium`}>T????ng t???</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={isActiveComments ? (tw`py-3 border-t-2 border-red-500 flex-1`) : (tw`py-3 flex-1`)}
                                onPress={() => {
                                    setIsActiveComments(true)
                                    setIsActiveSimilar(false)
                                }}
                            >
                                <Text style={tw`text-white text-center text-lg font-medium`}>B??nh lu???n</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`mt-3`}>
                            {isActiveSimilar ? (
                                <SimilarMovies />
                            ) : (
                                isActiveComments ? (
                                    <Comments />
                                ) : (
                                    <Text></Text>
                                )
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    )
}