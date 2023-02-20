import { apiService } from '../apiService';
import { Auth } from './type';

type Payload = {
    email: string;
    password: string;
};

export const authApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query<Auth, Payload>({
            query: (args) => {
                const { email, password } = args;
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: {
                        email,
                        password,
                    },
                };
            },
            transformResponse: (response: Auth) => {
                return response;
            },
            keepUnusedDataFor: 0,
        }),
        register: builder.query<Auth, Payload>({
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

export const { useLoginQuery, useRegisterQuery } = authApi;
