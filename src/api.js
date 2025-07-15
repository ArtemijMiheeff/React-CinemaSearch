import axios from "axios";

const baseUrl = 'https://api.kinopoisk.dev/';



const api = axios.create({ baseURL: baseUrl });


api.interceptors.request.use(function (config) {
    config.headers['X-API-KEY'] = '5ZCCR76-7W64YJD-N52N4RM-EPE3V0B';;
    if (!config.headers["content-type"]) {
        config.headers["content-type"] = "application/json";
    }
    return config;
});


export { api }