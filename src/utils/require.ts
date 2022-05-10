import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    timeout: 1000,
    headers: {}
})

instance.interceptors.request.use((config) => config, (error) => {
    console.log(error);
    return Promise.reject(error);
})

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export function get (config: AxiosRequestConfig) {
    return instance.request({...config, method: "GET"})
}

export function post (config: AxiosRequestConfig) {
    return instance.request({...config, method: "POST"})
}

export function put (config: AxiosRequestConfig) {
    return instance.request({...config, method: "PUT"})
}

export function remove (config: AxiosRequestConfig) {
    return instance.request({...config, method: "DELETE"})
}