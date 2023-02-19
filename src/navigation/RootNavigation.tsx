import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationService';
import {MainNavigation} from './MainNavigation';
import {AuthNavigation} from './AuthNavigation';

const isLogin = false;

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {isLogin ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
