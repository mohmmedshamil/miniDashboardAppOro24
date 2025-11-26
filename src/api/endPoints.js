import {  authApi } from './axios';

export const authAPI = {
  login: (credentials) => authApi.post('/login', credentials),
};