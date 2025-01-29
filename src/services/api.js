import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4e774013cace4f8d8e72f8e3cd6e0beb'
    }
})

export default api;