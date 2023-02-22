import { Container, SafeArea, TextField } from '@/shared';
import { FC } from 'react';

export const Booking: FC<{}> = () => {
    return (
        <SafeArea>
            <Container flex>
                <TextField>Booking</TextField>
            </Container>
        </SafeArea>
    );
};
