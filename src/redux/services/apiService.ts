import { RootState } from '@/hooks/useRedux';
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    retry,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const BASE_URL = 'https://fpoly-hcm.herokuapp.com/api';
const END_POINT_REFRESH_TOKEN = '/refresh';

// create a new mutex
const mutex = new Mutex();

const baseQuery = retry(
    fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = (getState() as RootState).root.auth.token;
            if (token && endpoint !== END_POINT_REFRESH_TOKEN) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    {
        maxRetries: 3,
    }
);

const BaseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (!result.error) {
        return result;
    }

    if (result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshResult = await baseQuery(END_POINT_REFRESH_TOKEN, api, extraOptions);

                if (refreshResult.data) {
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    // logout
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    } else {
        console.log({ [`status !== 401`]: result });
    }

    return result;
};

export const apiService = createApi({
    baseQuery: BaseQueryWithReAuth,
    endpoints: () => ({}),
});
