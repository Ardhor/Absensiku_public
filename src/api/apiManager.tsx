import axios from "axios";

const apiManager = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
});

export default apiManager;