import { INIT_STATE } from '../constants'
import * as TYPES from '../constants/movie'

export default function movieReducer(state = INIT_STATE.movie, action) {
    switch (action.type) {
        // Get all movie
        case TYPES.GET_MOVIE_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.GET_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload,
                message: 'Add movie successfully',
                error: false
            }
        case TYPES.GET_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get movies by category
        case TYPES.GET_MOVIES_BY_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_MOVIES_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesByCategory: action.payload,
                error: false
            }
        case TYPES.GET_MOVIES_BY_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get link movie
        case TYPES.GET_LINK_MOVIE_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_LINK_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                linksMovie: action.payload,
                error: false
            }
        case TYPES.GET_LINK_MOVIE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: true
            }
        }
        // Search movies
        case TYPES.SEARCH_MOVIES_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesSearch: action.payload,
                error: false
            }
        case TYPES.SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}