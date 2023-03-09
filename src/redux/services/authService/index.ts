import { http } from '@/libs';
import { Failure } from '@/utils';
import { Response } from 'types';
import { Auth, AuthResponse } from './type';

export class AuthService {
    static instance: AuthService;

    constructor() {}

    static getInstance() {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async login(email: string, password: string): Promise<AuthResponse> {
        try {
            const response = await http.post('/auth/login', {
                email,
                password,
            });
            if (response.status === 200) {
                const result: Response<Auth> = {
                    error: response.data.error,
                    responseTimestamp: response.data.responseTimestamp,
                    statusCode: response.data.statusCode,
                    totalCount: response.data.totalCount,
                    deleted: response.data.deleted,
                    data: {
                        username: response.data.data.username,
                        email: response.data.data.email,
                        avatar: response.data.data.avatar,
                    },
                };

                return result;
            }

            return new Failure({ message: response.data.message || 'Error Response', code: response.status || 400 });
        } catch (error: any) {
            return new Failure({ message: error.message || 'Error', code: error.code || 400 });
        }
    }
}
