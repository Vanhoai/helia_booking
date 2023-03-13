export type StateLoading = {
    isLoading: Boolean;
};

export type StateDevice = {
    deviceToken: string;
    deviceName: string;
};

export type StateLoadMore = {
    totalPage: number;
    data: any[];
};

export type StateAuth = {
    isLogin: boolean;
    accessToken: string;
    refreshToken: string;
    user: any;
};

export type StateResponse<T> = {
    code: number;
    message: string;
    data: T;
};
