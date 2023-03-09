import { Button, Container, SafeArea } from '@/shared';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
    const onPress = () => {
        console.log('Login');
    };

    return (
        <SafeArea>
            <Container flex padding={20}>
                <Button title="Login" onPress={onPress} />
            </Container>
        </SafeArea>
    );
};
