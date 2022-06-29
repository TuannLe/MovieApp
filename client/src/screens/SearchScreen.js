import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchItem from '../components/Search/SearchItem';

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

export default function SearchScreen() {
    return (
        <View style={tw`flex w-full h-full bg-black px-1.5`}>
            <View style={tw`flex flex-row items-center rounded-md my-3 bg-[#222]`}>
                <Ionicons name={'search-outline'} style={tw`text-xl text-gray-500 bg-[#222] px-3`} />
                <TextInput
                    style={tw`flex-1 py-1.5 text-white text-base`}
                    placeholder="Search..."
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={tw`flex-1 w-full h-full`}>
                <Text style={tw`text-gray-300 text-xl font-medium`}>Kết quả tìm kiếm</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <SearchItem item={item} />}
                    vertical
                />
            </View>
        </View>
    )
}