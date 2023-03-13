import { routes } from '@/navigation';
import { BottomTabParamsList } from '@/navigation/BottomNavigation';
import { Container, SafeArea, TextField } from '@/shared';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

type BookingProps = BottomTabScreenProps<BottomTabParamsList, routes.booking>;

export const Booking: FC<{}> = () => {
    return (
        <SafeArea>
            <Container flex>
                <TextField>Booking</TextField>
            </Container>
        </SafeArea>
    );
};
