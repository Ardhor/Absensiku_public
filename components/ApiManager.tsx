import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://192.168.1.6:3000', // Ganti dengan URL backend Anda
  responseType: 'json',
});

export default ApiManager;