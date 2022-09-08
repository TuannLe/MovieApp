import { View, Text } from 'react-native'
import { FlatList } from "react-native";
import tw from 'twrnc'
import ItemMovie from './ItemMovie'

export default function ListMovie({ data }) {
    return (
        <View style={tw`mt-4 px-1.5`}>
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