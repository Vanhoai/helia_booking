import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.example.com',
});

http.interceptors.request.use(
    (config) => {
        // Add your custom headers here
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => response,
    async (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export { http };
