import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector, useDispatch } from 'react-redux'
import ItemMovie from '../components/NewMovie/ItemMovie'

export default function RecommendScreen() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.movie.movies)
    return (
        <View style={tw`w-full h-full bg-black px-1.5`}>
            <Text style={tw`text-white text-3xl font-medium mb-2`}>New movie</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemMovie item={item} />}
                vertical
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}