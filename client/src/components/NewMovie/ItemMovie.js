import { View, Text, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState, useCallback } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function ItemMovie({ item }) {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const navigation = useNavigation()

    const [showMore, setShowMore] = useState(false)
    const [lengthMore, setLengthMore] = useState(false);

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2);
    }, []);

    return (
        <View style={tw`mt-2`}>
            <ImageBackground
                source={{ uri: item.image }}
                resizeMode="cover"
                style={[
                    { width: SCREEN_WIDTH, height: SCREEN_WIDTH / 1.9 },
                    tw`rounded overflow-hidden`
                ]}
            />
            <View style={tw`flex flex-row justify-between mt-5`}>
                <TouchableOpacity
                    style={tw`flex flex-row items-center bg-white px-4 rounded`}
                    onPress={() => navigation.navigate('DetailStack', {
                        name: item.name,
                        category: item.category,
                        image: item.image,
                    })}
                >
                    <Ionicons name="ios-play" size={24} color="black" />
                    <Text style={tw`text-xl font-medium ml-2`}>Play</Text>
                </TouchableOpacity>
                <View style={tw`flex flex-row`}>
                    <TouchableOpacity
                        style={tw`px-4 py-2`}
                    >
                        <Feather name="bookmark" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`px-4 py-2`}
                    >
                        <Feather name="download" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`px-4 py-2`}
                    >
                        <Ionicons name="share-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`my-3`}>
                <Text style={tw`text-white text-2xl font-medium`}>{item.name}</Text>
                <Text
                    style={tw`text-gray-400 text-lg`}
                    numberOfLines={showMore ? 99 : 2}
                    onTextLayout={onTextLayout}
                >
                    Lãng Khách - Vagabond là bộ phim hành động kể về hai nhân vật vô tình biết được được những “bí mật đen” của quốc gia. Trong phim, Suzy sẽ vào vai nữ chính Go Hae Ri, một nhân viên tình báo thuộc Cơ quan Tình báo quốc gia.
                </Text>
                {
                    lengthMore ?
                        <TouchableOpacity
                            onPress={() => setShowMore(!showMore)}
                        >
                            <Text style={tw`text-gray-400`}>{showMore ? 'Hide' : 'See more'}</Text>
                        </TouchableOpacity>
                        : null
                }
                {/* <FlatList
                    data={item.category}
                    renderItem={({ item }) => <Text style={tw`text-white text-base`}>{item + '  '}</Text>}
                    horizontal
                /> */}
            </View>
        </View>


    )
}