import AXIOS from "./index";

const url = '/categories'

export const getCategories = async (payload) => {
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