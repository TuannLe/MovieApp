import AXIOS from './index'

export const signIn = async (payload) => {
    try {
        const res = await AXIOS.post('/auth/signIn', payload)
        return res
    } catch (error) {
        return error
    }
}

export const signUp = async (payload) => {
    try {
        const res = await AXIOS.post('/auth/signUp', {
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

