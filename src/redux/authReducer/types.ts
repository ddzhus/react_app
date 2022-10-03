export const enum ActionTypes {
  STORE_TOKEN = 'auth/store_token',
}

export type StoreAuthAction = {
  type: ActionTypes.STORE_TOKEN,
};

export type Action = StoreAuthAction;

export interface AuthState {
  isAuth: boolean,
}
