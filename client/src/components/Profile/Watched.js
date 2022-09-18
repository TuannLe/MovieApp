import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import MovieItem from '../Profile/MovieItem'
import RemoveMovie from '../Profile/RemoveMovie'

export default function Watched() {
    const navigation = useNavigation()
    const data = useSelector((state) => state.auth.watching)

    const [isVisibleDelModal, setIsVisibleDelModal] = useState(false)
    const [movieIdSelected, setMovieIdSelected] = useState(null)

    const handleVisibleDelModal = () => {
        setIsVisibleDelModal(!isVisibleDelModal)
    }

    return (
        <View style={tw`flex-1 px-1.5 bg-black pt-3`}>
            {data.length ? (
                <FlatGrid
                    data={data}
                    itemDimension={100}
                    renderItem={({ item }) =>
                        <MovieItem
                            item={item}
                            handleVisible={handleVisibleDelModal}
                            setMovieIdSelected={setMovieIdSelected}
                        />
                    }
                    style={tw` bg-black`}
                    keyExtractor={(item, i) => i}
                    spacing={5}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={tw`flex items-center justify-center h-full`}>
                    <Text style={tw`text-gray-300 text-xl text-center`}>Danh sách trống :((</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeTab')}
                        style={tw`bg-white rounded px-20 py-2 mt-5`}
                    >
                        <Text style={tw`text-base font-medium`}>Trang chủ</Text>
                    </TouchableOpacity>
                </View>
            )}
            <RemoveMovie
                handleVisible={handleVisibleDelModal}
                isVisible={isVisibleDelModal}
                movieIdSelected={movieIdSelected}
            />
        </View>
    )
}