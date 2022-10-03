import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer/reducer';
import usersReducer from './usersReducer/reducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});
