import axios from 'axios';
import { baseURL } from '../utils/constants/endpoints';

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
