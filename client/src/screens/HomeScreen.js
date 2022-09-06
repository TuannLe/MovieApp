import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../components/Home'
import ListMovie from '../components/FeaturedMovies/ListMovie'
import * as categoryActions from '../redux/actions/category'
import { getMovieStart } from '../redux/actions/movie'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    useEffect(() => {
        dispatch(categoryActions.getCategoriesStart({ token }))
        dispatch(getMovieStart({ token }))
    }, [])
    const dataMovies = useSelector((state) => state.movie.movies)

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            <Home />
            <ListMovie data={dataMovies} />
            <ListMovie data={dataMovies} />
        </ScrollView>
    )
}

export default HomeScreen