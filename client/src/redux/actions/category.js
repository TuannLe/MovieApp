import * as TYPES from '../constants/category'

// Get categories
export const getCategoriesStart = () => {
    return {
        type: TYPES.GET_CATEGORIES_START,
    }
}

export const getCategoriesSuccess = (payload) => {
    return {
        type: TYPES.GET_CATEGORIES_SUCCESS,
        payload
    }
}

export const getCategoriesFailure = (error) => {
    return {
        type: TYPES.GET_CATEGORIES_FAILURE,
        error
    }
}