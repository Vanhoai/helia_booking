export interface IId {
    id: string;
}

export interface Response<T> {
    error?: boolean;
    responseTimestamp?: Date;
    statusCode?: number;
    totalCount?: number;
    deleted?: any;
    data?: T;
}

export interface ListResponse<T> {
    error?: boolean;
    responseTimestamp?: Date;
    statusCode?: number;
    totalCount?: number;
    deleted?: any;
    data?: T[];
}
