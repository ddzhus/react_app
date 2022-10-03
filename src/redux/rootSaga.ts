import { all } from 'redux-saga/effects';
import { authWatcher } from './authReducer/sagas';
import { usersWatcher } from './usersReducer/sagas';

export function* rootSaga() {
  yield all([
    usersWatcher(),
    authWatcher(),
  ]);
}
