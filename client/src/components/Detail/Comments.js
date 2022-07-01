import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import ItemComment from './ItemComment'
import WriteComment from './WriteComment'

const data = [
    {
        name: 'TuanLe',
        comment: 'phim qua la hay',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSTWR-WWY_GbV6AyfLmKGxJHxbpY0_tmR_b_-4X=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'TuanLe',
        comment: 'phim qua la hay',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSTWR-WWY_GbV6AyfLmKGxJHxbpY0_tmR_b_-4X=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'TuanLe',
        comment: 'phim qua la hay',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSTWR-WWY_GbV6AyfLmKGxJHxbpY0_tmR_b_-4X=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'TuanLe',
        comment: 'phim qua la hay',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSTWR-WWY_GbV6AyfLmKGxJHxbpY0_tmR_b_-4X=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'TuanLe',
        comment: 'phim qua la hay',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSTWR-WWY_GbV6AyfLmKGxJHxbpY0_tmR_b_-4X=s900-c-k-c0x00ffffff-no-rj'
    },
]

export default function Comments() {
    return (
        <View style={tw`w-full h-full`}>
            {data.map((item, i) => {
                return <ItemComment item={item} key={i} />
            })}
            <View style={tw`border border-red-500 mx-15 mt-2`}></View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={2}
            >
                <WriteComment />
            </KeyboardAvoidingView>
        </View>
    )
}