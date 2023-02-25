import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './MainNavigation';
import { AuthNavigation } from './AuthNavigation';
import { RootState, useAppSelector } from '@/hooks';

export const RootNavigation = () => {
    const isLogin: Boolean = useAppSelector((state: RootState) => state.root.auth.isLogin);

    return <NavigationContainer>{isLogin ? <MainNavigation /> : <AuthNavigation />}</NavigationContainer>;
};
