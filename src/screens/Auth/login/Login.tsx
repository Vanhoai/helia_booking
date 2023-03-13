import { Button, Container, SafeArea } from '@/shared';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
        
    const onPress = () => {
        console.log('onPress');
    };

    return (
        <SafeArea>
            <Container>
                <Button title="Login" onPress={onPress} />
            </Container>
        </SafeArea>
    );
};
