import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:9010'
});

API.interceptors.request.use(
    function (error) {
        console.log(error); 
        return Promise.reject(error);
    }
)

API.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        return Promise.reject(error);
    }
)


export default API;