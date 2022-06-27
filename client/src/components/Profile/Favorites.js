import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import MovieItem from '../Profile/MovieItem'

// const data = [
//     {
//         name: 'Vagabond',
//         category: ['Tình cảm', 'Hành động'],
//         image: 'http://images6.fanpop.com/image/photos/43000000/Vagabond-Poster-korean-dramas-43010000-1800-2691.jpg'
//     },
//     {
//         name: 'Soundtrack',
//         category: ['Tình cảm'],
//         image: 'https://bloganchoi.com/wp-content/uploads/2022/04/phim-soundtrack.jpg'
//     },
//     {
//         name: 'Our blues',
//         category: ['Tình cảm'],
//         image: 'https://image.thanhnien.vn/w1024/Uploaded/2022/zxaijr/2022_03_08/phimquytudansaohanleebyunghunkimwoobin1-9745.jpeg'
//     },
//     {
//         name: 'Hạ cánh nơi anh',
//         category: ['Tình cảm'],
//         image: 'https://upload.wikimedia.org/wikipedia/vi/6/64/Crash_Landing_on_You_main_poster.jpg'
//     },
//     {
//         name: 'Happiness',
//         category: ['Tình cảm', 'Hành động', 'Hư cấu'],
//         image: 'https://bazaarvietnam.vn/wp-content/uploads/2021/11/phim-hanh-phuc-chung-cu-co-doc-happiness-1-e1636363678113.jpg'
//     }
// ]
const data = []

export default function Favorites() {
    const navigation = useNavigation()

    return (
        <View style={tw`flex-1 px-1.5 bg-black pt-3`}>
            {
                data.length ?
                    (
                        <FlatGrid
                            data={data}
                            itemDimension={100}
                            renderItem={({ item }) => <MovieItem item={item} />}
                            style={tw` bg-black`}
                            keyExtractor={(item, i) => i}
                            spacing={5}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : (
                        <View style={tw`flex items-center justify-center h-full`}>
                            <Text style={tw`text-gray-300 text-xl`}>Maybe you don't know</Text>
                            <Text style={tw`text-gray-300 text-base text-center`}>Add movies to the list for convenient watching later</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('HomeTab')}
                                style={tw`bg-white rounded px-20 py-2 mt-5`}
                            >
                                <Text style={tw`text-base font-medium`}>Add movie</Text>
                            </TouchableOpacity>
                        </View>
                    )
            }
        </View>
    )
}