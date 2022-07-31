import { INIT_STATE } from '../constants'
import * as TYPES from '../constants/category'

export default function categoryReducers(state = INIT_STATE.category, action) {
    switch (action.type) {
        case TYPES.GET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case TYPES.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false
            }
        case TYPES.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}
