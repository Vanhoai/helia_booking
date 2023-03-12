import { StateLoading, StateAuth } from './types';

export const stateLoading: StateLoading = {
    isLoading: false,
};

export const stateAuth: StateAuth = {
    isLogin: false,
    accessToken: '',
    refreshToken: '',
    user: {},
};
