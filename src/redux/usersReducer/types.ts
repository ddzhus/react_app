import { IUser } from '../../types';

export const enum ActionTypes {
  LOADING_USERS = 'users/fetch',
  SET_USERS = 'users/add',
  SET_LOADING = 'users/loading',
  SET_ERROR = 'users/error',
}

export type LoadingUsersAction = {
  type: ActionTypes.LOADING_USERS,
  payload: {
    page: number,
    results: number,
  }
};

export type Action = LoadingUsersAction;

export interface UsersState {
  users: IUser[] | null,
  loading: boolean,
  error: string | null;
}
