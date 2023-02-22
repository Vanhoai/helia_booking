import React, { FC } from 'react';
import { Container, SafeArea, TextField } from '@/shared';

export const Profile: FC<{}> = () => {
    return (
        <SafeArea>
            <Container>
                <TextField>Search</TextField>
            </Container>
        </SafeArea>
    );
};
