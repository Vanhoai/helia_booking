import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { MainNavigation } from './MainNavigation';
import { AuthNavigation } from './AuthNavigation';
import { useAppSelector } from '@/hooks';

export const RootNavigation = () => {
    const isLogin: Boolean = useAppSelector((state) => state.root.loading.isLoading);

    return (
        <NavigationContainer ref={navigationRef}>
            {isLogin ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
};
