import { put, call, takeLatest } from 'redux-saga/effects';
import { API_SEED, INCLUDED_USER_INFO } from '../../constants';
import { getUsers } from '../../services/api';
import { IUser } from '../../types';
import { setError, setLoading, setUsers } from './reducer';
import { ActionTypes, LoadingUsersAction } from './types';

function* usersLoadingWorker(action: LoadingUsersAction) {
  try {
    const QUERY_PARAMS = {
      seed: API_SEED,
      inc: INCLUDED_USER_INFO,
      page: action.payload.page,
      results: action.payload.results,
    };
    yield put(setLoading(true));
    const users: IUser[] = yield call(getUsers, QUERY_PARAMS);
    yield put(setUsers(users));
  } catch {
    yield put(setError('Oops :('));
  }
}

export function* usersWatcher() {
  yield takeLatest(ActionTypes.LOADING_USERS, usersLoadingWorker);
}
