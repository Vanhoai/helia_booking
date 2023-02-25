import { useAppDispatch } from '@/hooks';
import { AuthActions } from '@/redux/reducers/authReducer';
import { Button, Container, SafeArea } from '@/shared';
import React, { FC } from 'react';

export const Login: FC<{}> = () => {
    const dispatch = useAppDispatch();

    const onPress = () => {
        dispatch(AuthActions.loginSuccess(''));
    };

    return (
        <SafeArea>
            <Container flex column justifyCenter padding={20}>
                <Button title="Loading" onPress={onPress} />
            </Container>
        </SafeArea>
    );
};
