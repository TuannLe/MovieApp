import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from "react-native";
import ItemMovie from './ItemMovie'
import tw from 'twrnc'

const data = [
    {
        name: 'Vagabond',
        category: ['Tình cảm', 'Hành động'],
        image: 'http://images6.fanpop.com/image/photos/43000000/Vagabond-Poster-korean-dramas-43010000-1800-2691.jpg'
    },
    {
        name: 'Soundtrack',
        category: ['Tình cảm'],
        image: 'https://bloganchoi.com/wp-content/uploads/2022/04/phim-soundtrack.jpg'
    },
    {
        name: 'Our blues',
        category: ['Tình cảm'],
        image: 'https://image.thanhnien.vn/w1024/Uploaded/2022/zxaijr/2022_03_08/phimquytudansaohanleebyunghunkimwoobin1-9745.jpeg'
    },
    {
        name: 'Hạ cánh nơi anh',
        category: ['Tình cảm'],
        image: 'https://upload.wikimedia.org/wikipedia/vi/6/64/Crash_Landing_on_You_main_poster.jpg'
    },
    {
        name: 'Happiness',
        category: ['Tình cảm', 'Hành động', 'Hư cấu'],
        image: 'https://bazaarvietnam.vn/wp-content/uploads/2021/11/phim-hanh-phuc-chung-cu-co-doc-happiness-1-e1636363678113.jpg'
    }
]

export default function ListMovie() {
    return (
        <View style={tw`mt-3 px-1.5`}>
            <Text style={tw`text-xl font-medium text-white`}>Trending</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemMovie item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    )
}