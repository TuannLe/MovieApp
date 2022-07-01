import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import tw from 'twrnc'

export default function ItemComment({ item }) {
    const [showMore, setShowMore] = useState(false)
    const [lengthMore, setLengthMore] = useState(false);

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2);
    }, []);

    return (
        <View style={tw`flex flex-row mb-3`}>
            <Image
                source={{ uri: item.avatar }}
                style={tw`w-12 h-12 rounded-full mr-3`}
            />
            <View style={tw`flex-1`}>
                <Text style={tw`text-white text-base`}>{item.name}</Text>
                <Text
                    style={tw`text-gray-400`}
                    numberOfLines={showMore ? 99 : 2}
                    onTextLayout={onTextLayout}
                >
                    {item.comment}
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
            </View>
        </View>
    )
}