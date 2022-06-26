import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import tw from 'twrnc'
import Home from '../components/Home'
import ListMovie from '../components/FeaturedMovies/ListMovie'

const HomeScreen = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            <Home />
            <ListMovie />
        </ScrollView>
    )
}

export default HomeScreen