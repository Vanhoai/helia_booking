import {apiService} from '../apiService';
import {Auth} from './type';

export const authApi = apiService.injectEndpoints({
  endpoints: builder => ({
    login: builder.query<Auth, void>({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      keepUnusedDataFor: 0,
    }),
    register: builder.query<Auth, void>({
      query: body => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginQuery, useRegisterQuery} = authApi;
