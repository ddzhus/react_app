import { RootState } from '../types';

export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuth;
