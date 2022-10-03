import { createAction } from '@reduxjs/toolkit';
import { ActionTypes } from './types';

export const setStoreAuth = createAction(ActionTypes.STORE_TOKEN);
