import axios from 'axios';
import { logout } from '../redux/slices/authSlices';
import { store } from '../redux/store';

const authApi = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'Content-Type': 'application/json',
  },
});

const userApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  userApi.interceptors.request.use(
    (config) => {
      const token = userApi.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  userApi.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        store.dispatch(logout());
        localStorage.removeItem('orotoken');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );


export { authApi, userApi };