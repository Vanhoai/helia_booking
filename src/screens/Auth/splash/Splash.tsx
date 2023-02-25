import React, { FC, useEffect } from 'react';
import { Container, TextField } from '@/shared';
import { routes, SplashProps } from '@/navigation';
import { useNavigation } from '@react-navigation/native';

export const Splash: FC<{}> = () => {
    const navigation = useNavigation<SplashProps['navigation']>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(routes.marker);
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
