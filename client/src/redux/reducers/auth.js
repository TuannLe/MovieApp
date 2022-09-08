import { INIT_STATE } from '../constants'
import * as TYPES from '../constants/auth'

export default function authReducers(state = INIT_STATE.auth, action) {
    switch (action.type) {
        case TYPES.SIGN_IN_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.SIGN_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case TYPES.SIGN_UP_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                message: "Đăng ký thành công",
                isLoading: false,
                error: false
            }
        case TYPES.SIGN_UP_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case TYPES.FAVORITE_MOVIE_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.FAVORITE_MOVIE_SUCCESS:
            return {
                ...state,
                favorites: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.FAVORITE_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case TYPES.WATCHING_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.WATCHING_SUCCESS:
            return {
                ...state,
                watching: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.WATCHING_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}