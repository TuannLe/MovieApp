import { View, Text, TextInput, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import SearchItem from '../components/Search/SearchItem';
import { searchMovieStart } from '../redux/actions/movie'

export default function SearchScreen() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const data = useSelector((state) => state.movie.moviesSearch)
    const [input, setInput] = useState('')

    useEffect(() => {
        if (input) {
            dispatch(searchMovieStart({ token, movieName: input }))
        }
    }, [input])


    return (
        <View style={tw`flex w-full h-full bg-black px-1.5`}>
            <View style={tw`flex flex-row items-center rounded-md my-3 bg-[#222]`}>
                <Ionicons name={'search-outline'} style={tw`text-xl text-gray-500 bg-[#222] px-3`} />
                <TextInput
                    style={tw`flex-1 py-1.5 text-white text-base`}
                    placeholder="Search..."
                    placeholderTextColor={'gray'}
                    value={input}
                    onChangeText={val => setInput(val)}
                />
            </View>
            <View style={tw`flex-1 w-full h-full`}>
                {data.length ? (
                    <>
                        <Text style={tw`text-gray-300 text-xl font-medium`}>Kết quả tìm kiếm</Text>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <SearchItem item={item} />}
                            vertical
                        />
                    </>
                ) : (
                    <Text style={tw`text-gray-300 text-xl font-medium`}>Nhập tên phim cần tìm kiếm</Text>
                )}
            </View>
        </View>
    )
}