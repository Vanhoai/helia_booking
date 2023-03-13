import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './MainNavigation';
import { AuthNavigation } from './AuthNavigation';
import { RootState, useAppSelector } from '@/hooks';
import { navigationRef } from './NavigationService';

export const RootNavigation = () => {
    const isLogin: Boolean = useAppSelector((state: RootState) => state.root.auth.isLogin);

    return (
        <NavigationContainer ref={navigationRef}>
            {isLogin ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
};
