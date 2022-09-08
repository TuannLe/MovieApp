import { View, Text, SafeAreaView, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteStart } from '../redux/actions/auth'
import SimilarMovies from '../components/Detail/SimilarMovies'
import Comments from '../components/Detail/Comments'

export default function DetailScreen({ route, navigation }) {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const [isActiveSimilar, setIsActiveSimilar] = useState(true)
    const [isActiveComments, setIsActiveComments] = useState(false)
    const movieId = route.params.item._id

    const handleFavorite = () => {
        dispatch(FavoriteStart({ token, movieId }))
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            <SafeAreaView>
                <ImageBackground
                    source={{ uri: `data:image/png;base64,${route.params.item.poster}` }}
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
                        <Text style={tw`text-white text-3xl font-medium`}>{route.params.item.movieName}</Text>
                        <View style={tw`flex flex-row items-center py-1`}>
                            <Text style={tw`text-gray-400 text-base`}>2h28m</Text>
                            <Text style={tw`px-2 ml-2 font-medium bg-yellow-400 rounded overflow-hidden`}>HD</Text>
                        </View>
                        <View style={tw`pb-3`}>
                            <Text style={tw`text-gray-400 text-base`}>{route.params.item.category[0].categoryName}</Text>
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
                            onPress={handleFavorite}
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
                            {route.params.item.description}
                        </Text>
                        <Text style={tw`text-gray-400 text-base my-2`}>
                            Đạo diễn: {route.params.item.directors.join(',')}
                        </Text>
                        <Text style={tw`text-gray-400 text-base`}>
                            Diễn viên: {route.params.item.casts.join(',')}
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
                                <Text style={tw`text-white text-center text-lg font-medium`}>Tương tự</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={isActiveComments ? (tw`py-3 border-t-2 border-red-500 flex-1`) : (tw`py-3 flex-1`)}
                                onPress={() => {
                                    setIsActiveComments(true)
                                    setIsActiveSimilar(false)
                                }}
                            >
                                <Text style={tw`text-white text-center text-lg font-medium`}>Bình luận</Text>
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