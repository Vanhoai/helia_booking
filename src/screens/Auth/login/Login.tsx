import React, { FC, useEffect } from 'react';
import { useLoginMutation } from '@/redux/services/auth/authService';
import { Container } from '@/shared';

export const Login: FC<{}> = () => {
    const [login, data] = useLoginMutation();

    useEffect(() => {
        const handleLogin = async () => {
            await login({
                email: 'hoaitv@gmail.com',
                password: 'admin',
            });
        };

        handleLogin();
        console.log(data);
    }, []);

    return <Container></Container>;
};
