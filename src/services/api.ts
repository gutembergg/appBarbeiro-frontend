import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.99.1:3232',
});

export default api;
