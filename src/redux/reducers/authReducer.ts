import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stateAuth } from '../common/initState';
import { StateAuth } from '../common/types';

const authSlice = createSlice({
    name: 'auth',
    initialState: stateAuth,
    reducers: {
        login: (state: StateAuth) => {
            state.isLogin = false;
        },
        loginSuccess(state: StateAuth, action: PayloadAction<StateAuth>) {
            state.isLogin = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },
        loginFail(state: StateAuth) {
            state.isLogin = false;
        },
        register: (state: StateAuth) => {
            state.isLogin = false;
        },
        registerSuccess: (state: StateAuth) => {
            state.isLogin = false;
        },
        registerFail: (state: StateAuth) => {
            state.isLogin = false;
        },
        logout: (state: StateAuth) => {
            state.isLogin = false;
            state.accessToken = '';
            state.refreshToken = '';
            state.user = {};
        },
    },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
