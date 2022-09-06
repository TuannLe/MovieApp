import { takeLatest, call, put, take } from 'redux-saga/effects'
import * as actions from '../actions/movie'
import * as apis from '../../apis/movieAPI'
import * as types from '../constants/movie'

function* getAllMoviesSaga(action) {
    try {
        console.log('Get movies running...')
        const res = yield call(apis.getAllMovies, action.payload)
        if (res.status === 200) {
            console.log('Get movies successfully')
            yield put(actions.getMovieSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getMovieFailure(error))
    }
}

function* getMoviesByCategory(action) {
    try {
        console.log('Get movies by category running...')
        const res = yield call(apis.getMoviesByCategory, action.payload)
        if (res.status === 200) {
            console.log('Get movies by category successfully')
            yield put(actions.getMovieByCategorySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getMovieByCategoryFailure(error))
    }
}

function* searchMoviesSaga(action) {
    try {
        console.log('Search movies running...')
        const res = yield call(apis.searchMovies, action.payload)
        if (res.status === 200) {
            console.log('Search movies successfully')
            yield put(actions.searchMovieSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.searchMovieFailure(error))
    }
}

export default movieSaga = [
    takeLatest(types.GET_MOVIE_START, getAllMoviesSaga),
    takeLatest(types.GET_MOVIES_BY_CATEGORY_START, getMoviesByCategory),
    takeLatest(types.SEARCH_MOVIES_START, searchMoviesSaga)
]