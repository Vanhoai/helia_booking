import { routes } from '@/navigation';
import { BottomTabParamsList } from '@/navigation/BottomNavigation';
import { Container, SafeArea, TextField } from '@/shared';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';

type HomeProps = BottomTabScreenProps<BottomTabParamsList, routes.home>;

export const Home: FC<{}> = ({}) => {
    return (
        <SafeArea>
            <Container flex>
                <TextField>Home</TextField>
            </Container>
        </SafeArea>
    );
};
