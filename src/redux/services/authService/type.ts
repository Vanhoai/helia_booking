import { Failure } from '@/utils';
import { Response } from 'types';

export interface Payload {}

export interface Auth {
    email: string;
    username: string;
    avatar: string;
}

export type AuthResponse = Response<Auth> | Failure;
