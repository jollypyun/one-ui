import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const {headers} = config
    // 인증 토큰 도입 후 구현
    return config 
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    const {status} = response
    return response
}


const api = axios.create({
    baseURL: process.env['NEXT_PUBLIC_URL_LOCAL_SERVER'],
    timeout: 1e4
})



export {api}