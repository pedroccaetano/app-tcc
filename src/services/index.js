import axios from 'axios';

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://server-tcc.herokuapp.com',
});

export default api;
