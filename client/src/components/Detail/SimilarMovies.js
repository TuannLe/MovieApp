import { View } from 'react-native'
import { useEffect } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import ItemMovie from './ItemMovie'
import { getMovieByCategoryStart } from '../../redux/actions/movie'

export default function SimilarMovies({ categoryId }) {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const data = useSelector((state) => state.movie.moviesByCategory)

    useEffect(() => {
        dispatch(getMovieByCategoryStart({ token, categoryId }))
    }, [categoryId, token])
    return (
        <View style={tw`w-full h-full`}>
            {data.map((item, i) => {
                return <ItemMovie item={item} key={i} />
            })}
        </View>
    )
}