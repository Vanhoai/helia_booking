import React, { FC } from 'react';
import { Container, TextField } from '@/shared';

export const Splash: FC<{}> = () => {
    return (
        <Container flex relative>
            <Container absolute alignCenter bottom={12} left={0} right={0}>
                <TextField>Version 1.0</TextField>
            </Container>
        </Container>
    );
};
