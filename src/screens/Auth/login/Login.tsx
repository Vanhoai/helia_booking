import { TextField } from '@/shared';
import React, { FC, useEffect } from 'react';
import { AuthActions } from 'store/authReducer';
import { useAppDispatch } from 'store/store';

export const Login: FC<{}> = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(AuthActions.setIsLoading(true));

        // delay 10s

        dispatch(AuthActions.setIsLoading(false));
    }, []);

    return <TextField fontFamily="medium">{'Hello World'}</TextField>;
};
