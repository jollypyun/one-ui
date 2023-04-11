import axios from 'axios';


axios.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
)

export default axios;