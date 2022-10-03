import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';
import { UsersState } from './types';

const initialState: UsersState = {
  users: null,
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      if (state.users && action.payload.length === 10) {
        state.users = [...state.users, ...action.payload];
      } else {
        state.users = action.payload;
      }
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUsers, setLoading, setError } = usersSlice.actions;

export default usersSlice.reducer;
