import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  userPosts: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchUserDetailsStart: (state) => {
        state.isLoading = true;
        state.error = null;
      },
    fetchUserDetailsSuccess: (state, action) => {
    state.isLoading = false;
    state.currentUser = action.payload.user;
    state.userPosts = action.payload.posts;
    state.error = null;
    },
    fetchUserDetailsFailure: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    },
    clearCurrentUser: (state) => {
    state.currentUser = null;
    state.userPosts = [];
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserDetailsStart,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  clearCurrentUser,
} = usersSlice.actions;

export default usersSlice.reducer;