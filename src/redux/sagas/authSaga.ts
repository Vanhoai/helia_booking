import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { StateAuth } from '../common/types';
import { AuthActions } from '../reducers/authReducer';
import { AuthService } from '../services/authService';

function* handleLogin(action: PayloadAction<{ email: string; password: string }>): Generator<any> {
    try {
        const response = yield AuthService.getInstance().login(action.payload.email, action.payload.password);

        // const state: StateAuth = {
        //     isLogin: true,
        //     accessToken: response?.data?.accessToken,
        //     refreshToken: response?.data.refreshToken,
        //     user: response.data.user,
        // };

        // put(AuthActions.loginSuccess(state));
    } catch (error) {}
}

function* handleRegister() {}

function* handleLogout() {}

export default function* watchAuthSaga() {
    takeLatest(AuthActions.login.type, handleLogin);
    takeLatest(AuthActions.register.type, handleRegister);
    takeLatest(AuthActions.logout.type, handleLogout);
}
