import { RootState } from '../types';

export const usersSelector = (state: RootState) => state.users.users;
export const loadingSelector = (state: RootState) => state.users.loading;
export const errorSelector = (state: RootState) => state.users.error;
