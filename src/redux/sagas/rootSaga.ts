import { all, fork } from 'redux-saga/effects';
import watchAuthSaga from './authSaga';
import watchUserSaga from './userSaga';

export default function* rootSaga() {
    yield all([fork(watchAuthSaga), fork(watchUserSaga)]);
}
