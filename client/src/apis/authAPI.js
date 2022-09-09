import AXIOS from './index'

export const signIn = async (payload) => {
    try {
        const res = await AXIOS.post('/auth/login', payload)
        return res
    } catch (error) {
        return error
    }
}

export const signUp = async (payload) => {
    try {
        const res = await AXIOS.post(`/auth/register`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            phoneNumber: payload.phoneNumber,
            password: payload.crPassword,
            email: payload.crEmail,
        })
        return res
    } catch (error) {
        return error
    }
}

export const favorites = async (payload) => {
    try {
        const res = await AXIOS.put(`/user/${payload.movieId}/favorites-movie`, {
            userId: payload.userId,
        }, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const watching = async (payload) => {
    try {
        const res = await AXIOS.put(`/user/${payload.movieId}/watching-movie`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getMoviesFavorite = async (payload) => {
    try {
        const res = await AXIOS.get(`/user/${payload.userId}/get-movie-favorite`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getMoviesWatching = async (payload) => {
    try {
        const res = await AXIOS.get(`/user/${payload.userId}/get-movie-watching`, {
            headers: {
                'token': `Bearer ${payload.token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}