import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:7188/api',
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

export { api };