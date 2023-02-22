import { useAppDispatch } from '@/hooks';
import { LoadingActions } from '@/redux/reducers/loadingReducer';
import { Button, Container, SafeArea } from '@/shared';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
    const dispatch = useAppDispatch();

    const onPress = () => {
        dispatch(LoadingActions.setIsLoading(true));
    };

    return (
        <SafeArea>
            <Container flex column justifyCenter padding={20}>
                <Button title="Loading" onPress={onPress} />
            </Container>
        </SafeArea>
    );
};
