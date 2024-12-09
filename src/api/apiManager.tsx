import axios from "axios";

const apiManager = axios.create({
    baseURL: 'http://192.168.1.2:8000/api/classes',
    responseType: 'json',
});

export default apiManager;