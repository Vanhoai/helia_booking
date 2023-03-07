import { Container, SafeArea } from '@/shared';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
    return (
        <SafeArea>
            <Container flex column justifyCenter padding={20}></Container>
        </SafeArea>
    );
};
