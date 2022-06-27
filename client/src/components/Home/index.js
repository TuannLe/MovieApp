import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import CategoriesModal from '../Modal/CategoriesModal';
import { useNavigation } from '@react-navigation/native'

export default function index() {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const navigation = useNavigation()
    const [isVisibleModal, setVisibleModal] = useState(false)
    const handleVisibleModal = () => {
        setVisibleModal(!isVisibleModal)
    }

    return (
        <View style={tw`bg-pink-200`}>
            <ImageBackground
                source={{ uri: 'http://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/624319fd37081a49d141b7d4_banner-nhat-ky-tu-do-cua-toi.jpeg' }}
                style={[
                    { width: SCREEN_WIDTH, height: SCREEN_WIDTH * 1.4 },
                    tw`justify-end relative`
                ]}
                resizeMode="cover"
            />
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.00005)"]}
                style={tw`w-full h-40 justify-end absolute top-0 right-0 left-0`}
            >
                <TouchableOpacity
                    style={tw`absolute flex flex-row items-center top-3 right-3`}
                    onPress={handleVisibleModal}
                >
                    <Text style={tw`text-white text-lg mr-2`}>Categories</Text>
                    <AntDesign name="caretdown" size={16} color="white" />
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.00005)", "rgba(0, 0, 0, 1)"]}
                style={tw`w-full h-80 justify-end absolute bottom-0 right-0 left-0`}
            >
                <View style={tw`flex items-center pb-3 mx-7`}>
                    <Text style={tw`text-white text-4xl font-medium text-center`}>Nhật ký tự do của tôi</Text>
                    <Text style={tw`text-white text-xl pt-3`}>Tâm lý - Tình cảm</Text>
                </View>
                <View style={tw`flex flex-row justify-around pb-3`}>
                    <TouchableOpacity
                        style={tw`flex items-center`}
                    >
                        <Feather name="bookmark" size={24} color="white" />
                        <Text style={tw`text-white text-base`}>Xem sau</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center px-3 rounded bg-white my-2`}
                        onPress={() => setTimeout(() => navigation.navigate('PlayMovieStack'), 500)}
                    >
                        <Ionicons name="play" size={24} color="black" />
                        <Text style={tw`text-black text-base ml-2 font-medium`}>Phát</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex items-center`}
                    >
                        <Ionicons name="ios-information-circle-outline" size={24} color="white" />
                        <Text style={tw`text-white text-base`}>Thông tin</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <CategoriesModal
                handleVisible={handleVisibleModal}
                isVisible={isVisibleModal}
            />
        </View>
    )
}