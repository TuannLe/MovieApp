import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth'
import * as apis from '../../apis/authAPI'
import * as TYPES from '../constants/auth'

function* fetchLoginSaga(action) {
    try {
        console.log('Fetching login running...')
        const res = yield call(apis.signIn, action.payload)
        if (res.status === 200) {
            console.log("Login success")
            yield put(actions.SignInSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.SignInFailure(error))
    }
}

function* signUpSaga(action) {
    try {
        console.log('Sign Up running...')
        const res = yield call(apis.signUp, action.payload)
        if (res.status === 200) {
            console.log('Sign Up Success')
            yield put(actions.SignUpSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.SignUpFailure(error))
    }
}

function* favoritesSaga(action) {
    try {
        console.log('Add favorites movie running...')
        const res = yield call(apis.favorites, action.payload)
        if (res.status === 200) {
            console.log('Add favorites movie successfully')
            yield put(actions.FavoriteSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.FavoriteFailure(error))
    }
}

function* watchingSaga(action) {
    try {
        console.log('Add watching movie running...')
        const res = yield call(apis.watching, action.payload)
        if (res.status === 200) {
            console.log('Add watching movie successfully')
            yield put(actions.WatchingSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.WatchingFailure(error))
    }
}

export default authSaga = [
    takeLatest(TYPES.SIGN_IN_START, fetchLoginSaga),
    takeLatest(TYPES.SIGN_UP_START, signUpSaga),
    takeLatest(TYPES.FAVORITE_MOVIE_START, favoritesSaga),
    takeLatest(TYPES.WATCHING_START, watchingSaga),
]