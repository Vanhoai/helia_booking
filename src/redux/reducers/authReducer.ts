import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stateAuth } from '../common/initState';
import { StateAuth } from '../common/types';

const authSlice = createSlice({
    name: 'auth',
    initialState: stateAuth,
    reducers: {
        setDeviceToken(state: StateAuth, action: PayloadAction<string>) {
            state.deviceToken = action.payload;
        },
        loginSuccess(state: StateAuth, action: PayloadAction<string>) {
            state.isLogin = true;
            state.token = action.payload;
        },
    },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
