import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: Boolean(localStorage.getItem('auth')),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
