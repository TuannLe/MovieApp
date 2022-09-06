import AXIOS from './index'

const url = '/movies'

export const getAllMovies = async (payload) => {
    try {
        const res = await AXIOS.get(`${url}/get-all`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getMoviesByCategory = async (payload) => {
    try {
        const res = await AXIOS.get(`${url}/${payload.categoryId}/get-by-category`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const searchMovies = async (payload) => {
    try {
        const res = await AXIOS.post(`${url}/search`, payload, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}