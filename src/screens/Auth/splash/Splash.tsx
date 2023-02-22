import React, { FC, useEffect } from 'react';
import { Container, TextField } from '@/shared';
import { navigate } from '@/navigation/NavigationService';
import { routes } from '@/navigation';

export const Splash: FC<{}> = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(routes.marker);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Container flex relative>
            <Container absolute alignCenter bottom={12} left={0} right={0}>
                <TextField>Version 1.0</TextField>
            </Container>
        </Container>
    );
};
