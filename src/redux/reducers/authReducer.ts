import {createSlice} from '@reduxjs/toolkit';

type AuthState = {
  token?: string;
};

const defaultAuthState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultAuthState,
  reducers: {},
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
