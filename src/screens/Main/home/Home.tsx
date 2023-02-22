import { Container, SafeArea, TextField } from '@/shared';
import React, { FC } from 'react';

export const Home: FC<{}> = () => {
    return (
        <SafeArea>
            <Container flex>
                <TextField>Home</TextField>
            </Container>
        </SafeArea>
    );
};
