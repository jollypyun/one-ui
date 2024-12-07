import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:9010',
    // baseURL: process.env['NEXT_PUBLIC_URL_LOCAL_SERVER'],
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})


api.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error)
    }
)


export default api