import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../components/Home'
import ListMovie from '../components/FeaturedMovies/ListMovie'
import * as categoryActions from '../redux/actions/category'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    useEffect(() => {
        dispatch(categoryActions.getCategoriesStart({ token }))
    })

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            <Home />
            <ListMovie />
            <ListMovie />
        </ScrollView>
    )
}

export default HomeScreen