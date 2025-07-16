import axios from "axios";

const baseUrl = 'https://api.kinopoisk.dev/';



const api = axios.create({ baseURL: baseUrl });



api.interceptors.request.use(function (config) {
    // const apiKey = 'K2RKCRW-XSD4Q1A-PCH0J54-W8G1CJM';
    const apiKey = '5ZCCR76-7W64YJD-N52N4RM-EPE3V0B';
    config.headers['X-API-KEY'] = apiKey;;
    if (!config.headers["content-type"]) {
        config.headers["content-type"] = "application/json";
    }
    return config;
});


export { api }