import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth'
import * as apis from '../../apis/authAPI'
import * as TYPES from '../constants/auth'

function* fetchLoginSaga(action) {
    try {
        console.log('Fetching login running...')
        const res = yield call(apis.signIn, action.payload)
        if (res.status === 200) {
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
        if (res) {
            console.log('Sign Up Success')
            yield put(actions.SignUpSuccess())
        }
    } catch (error) {
        yield put(actions.SignUpFailure(error))
    }
}

export default authSaga = [
    takeLatest(TYPES.SIGN_IN_START, fetchLoginSaga),
    takeLatest(TYPES.SIGN_UP_START, signUpSaga)
]