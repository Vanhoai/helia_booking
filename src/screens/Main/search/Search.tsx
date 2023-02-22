import { Container, SafeArea, TextField } from '@/shared';
import React, { FC } from 'react';

export const Search: FC<{}> = () => {
    return (
        <SafeArea>
            <Container flex>
                <TextField>Search</TextField>
            </Container>
        </SafeArea>
    );
};
