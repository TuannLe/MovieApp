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

// Logout
export const logout = () => {
    return {
        type: TYPES.LOGOUT,
        payload: {}
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

export const GetMoviesFavoriteStart = (payload) => {
    return {
        type: TYPES.GET_MOVIES_FAVORITE_START,
        payload
    }
}

export const GetMoviesFavoriteSuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIES_FAVORITE_SUCCESS,
        payload
    }
}

export const GetMoviesFavoriteFailure = (error) => {
    return {
        type: TYPES.GET_MOVIES_FAVORITE_FAILURE,
        error
    }
}

export const GetMovieWatchingStart = (payload) => {
    return {
        type: TYPES.GET_MOVIES_WATCHING_START,
        payload
    }
}

export const GetMovieWatchingSuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIES_WATCHING_SUCCESS,
        payload
    }
}

export const GetMovieWatchingFailure = (error) => {
    return {
        type: TYPES.GET_MOVIES_WATCHING_FAILURE,
        error
    }
}