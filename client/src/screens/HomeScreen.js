import { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
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
    const moviesByCategory = useSelector((state) => state.movie.moviesByCategory)

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`bg-black`}
        >
            <Home item={dataMovies[0]} />
            {moviesByCategory.length ? (
                <>
                    <ListMovie data={moviesByCategory} />
                </>
            ) : (
                <>
                    <Text style={tw`text-xl font-medium text-white px-1.5 mt-3`}>Trending</Text>
                    <ListMovie data={dataMovies} />
                    <Text style={tw`text-xl font-medium text-white px-1.5 mt-3`}>New</Text>
                    <ListMovie data={dataMovies} />
                </>
            )}
        </ScrollView>
    )
}

export default HomeScreen