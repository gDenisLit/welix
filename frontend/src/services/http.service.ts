import Axios from 'axios'

interface HttpService {
    [method: string]: (endpoint: string, data?: any) => Promise<any>
}

const BASE_URL =
    process.env.NODE_ENV === 'production' ?
        '/api/' :
        '//localhost:3030/api/'

const axios = Axios.create({
    withCredentials: true,
})

export const httpService: HttpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    },
}

async function ajax(endpoint: string, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: method === 'GET' ? data : null,
        })
        return res.data
    } catch (err: any) {
        console.log(
            `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
            data
        )
        console.dir(err)
        throw err
    }
}