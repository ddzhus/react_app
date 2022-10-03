import { put, takeLatest } from 'redux-saga/effects';
import { setAuth } from './reducer';
import { ActionTypes } from './types';

function* authWorker() {
  const auth: string | null = yield window.localStorage.getItem('auth');
  if (!auth) {
    window.localStorage.setItem('auth', 'authorized');
  }
  yield put(setAuth(true));
}

export function* authWatcher() {
  yield takeLatest(ActionTypes.STORE_TOKEN, authWorker);
}
