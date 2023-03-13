import { StateResponse } from '@/redux/common/types';
import { apiService } from '../apiService';
import { AuthPayload, AuthResponse } from './type';

interface Response {
    error: boolean;
    responseTimestamp: Date;
    statusCode: number;
    data: {};
}

export const authApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<Response, AuthPayload>({
            query: (args) => {
                const { email, password } = args;
                return {
                    url: '/auth/login',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: {
                        email,
                        password,
                    },
                };
            },
        }),
        register: builder.mutation<StateResponse<AuthResponse>, AuthPayload>({
            query: (args) => {
                const { email, password } = args;
                return {
                    url: '/auth/register',
                    method: 'POST',
                    body: {
                        email,
                        password,
                    },
                };
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
