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
    token: string;
    user: any;
};
