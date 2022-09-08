import * as TYPES from '../constants/auth'

// SignIn
export const SignInStart = (payload) => {
    return {
        type: TYPES.SIGN_IN_START,
        payload
    }
}

export const SignInSuccess = (payload) => {
    return {
        type: TYPES.SIGN_IN_SUCCESS,
        payload
    }
}

export const SignInFailure = (error) => {
    return {
        type: TYPES.SIGN_IN_FAILURE,
        error: error
    }
}

// SignUp
export const SignUpStart = (payload) => {
    return {
        type: TYPES.SIGN_UP_START,
        payload
    }
}

export const SignUpSuccess = (payload) => {
    return {
        type: TYPES.SIGN_UP_SUCCESS,
        payload
    }
}

export const SignUpFailure = (error) => {
    return {
        type: TYPES.SIGN_UP_FAILURE,
        error
    }
}

export const FavoriteStart = (payload) => {
    return {
        type: TYPES.FAVORITE_MOVIE_START,
        payload
    }
}

export const FavoriteSuccess = (payload) => {
    return {
        type: TYPES.FAVORITE_MOVIE_SUCCESS,
        payload
    }
}

export const FavoriteFailure = (error) => {
    return {
        type: TYPES.FAVORITE_MOVIE_FAILURE,
        error
    }
}

export const WatchingStart = (payload) => {
    return {
        type: TYPES.WATCHING_START,
        payload
    }
}

export const WatchingSuccess = (payload) => {
    return {
        type: TYPES.WATCHING_SUCCESS,
        payload
    }
}

export const WatchingFailure = (error) => {
    return {
        type: TYPES.WATCHING_FAILURE,
        error
    }
}