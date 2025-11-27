import {  authApi, userApi } from './axios';

export const authAPI = {
  login: (credentials) => authApi.post('/login', credentials),
};

export const usersAPI = {
    getUsers: () => userApi.get('/users'),
    getUser: (id) => userApi.get(`/users/${id}`),
    getUserPosts: (id) => userApi.get(`/users/${id}/posts`),
    getPost: (id) => userApi.get(`/posts/${id}`),
  };