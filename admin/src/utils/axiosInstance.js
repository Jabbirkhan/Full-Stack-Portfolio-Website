import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    res => res,
    err => {
        // if(err.response.status === 401){
        //     window.location.href = "/login";
        // }
        return Promise.reject(err);
    }
)

export default axiosInstance;
