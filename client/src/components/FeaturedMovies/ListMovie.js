import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { FlatList } from "react-native";
import tw from 'twrnc'
import ItemMovie from './ItemMovie'

export default function ListMovie({ data }) {
    return (
        <View style={tw`mt-4 px-1.5`}>
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