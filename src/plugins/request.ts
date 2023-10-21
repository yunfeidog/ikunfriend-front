import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080/api"
});

request.interceptors.request.use(function (config) {
    console.log("发送请求")
    return config;
}, function (error) {
    return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
    console.log("响应请求")
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default request;
