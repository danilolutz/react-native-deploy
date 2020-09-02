import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.34:3333',
  baseURL: 'http://localhost:3333', // adb reverse tcp:3333 tcp:3333
});

export default api;
