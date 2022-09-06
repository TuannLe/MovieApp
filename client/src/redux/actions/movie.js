import * as TYPES from '../constants/movie'

// Get all movie
export const getMovieStart = (payload) => {
    return {
        type: TYPES.GET_MOVIE_START,
        payload
    }
}

export const getMovieSuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIE_SUCCESS,
        payload
    }
}

export const getMovieFailure = (error) => {
    return {
        type: TYPES.GET_MOVIE_FAILURE,
        error
    }
}

// Get movie by category
export const getMovieByCategoryStart = (payload) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_START,
        payload
    }
}

export const getMovieByCategorySuccess = (payload) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_SUCCESS,
        payload
    }
}

export const getMovieByCategoryFailure = (error) => {
    return {
        type: TYPES.GET_MOVIES_BY_CATEGORY_FAILURE,
        error
    }
}

// Search movie
export const searchMovieStart = (payload) => {
    return {
        type: TYPES.SEARCH_MOVIES_START,
        payload
    }
}

export const searchMovieSuccess = (payload) => {
    return {
        type: TYPES.SEARCH_MOVIES_SUCCESS,
        payload
    }
}

export const searchMovieFailure = (error) => {
    return {
        type: TYPES.SEARCH_MOVIES_FAILURE,
        error
    }
}