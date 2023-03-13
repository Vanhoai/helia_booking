export type AuthPayload = {
    email: string;
    password: string;
};

export type AuthResponse = {
    id: number;
    email: string;
    phone: string;
    avatar: string;
    dob: Date;
};
