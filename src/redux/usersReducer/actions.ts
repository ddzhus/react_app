/* eslint-disable max-len */
import { createAction } from '@reduxjs/toolkit';
import { ActionTypes } from './types';

export const loadingUsers = createAction<{ page: number, results: number }>(ActionTypes.LOADING_USERS);
