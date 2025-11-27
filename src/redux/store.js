import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import userReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer
  },
});