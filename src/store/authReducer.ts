import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoading: boolean;
    isLogin: boolean;
}

const initialState: AuthState = {
    isLoading: false,
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogin: (state: AuthState, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setIsLoading: (state: AuthState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const AuthActions = authSlice.actions;
export default authSlice;
