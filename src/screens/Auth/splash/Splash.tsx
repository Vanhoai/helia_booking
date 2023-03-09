import React, { FC, useEffect } from 'react';
import { routes } from '@/config';
import { navigate } from '@/navigation/NavigationService';
import { Container } from '@/shared';

export const Splash: FC<{}> = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(routes.login);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return <Container></Container>;
};
