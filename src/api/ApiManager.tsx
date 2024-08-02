import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://dummyjson.com/",
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;