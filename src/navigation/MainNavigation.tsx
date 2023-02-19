import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomTabsNavigation} from './BottomNavigation';
import {routes} from './routes';

const MainStack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName={routes.bottom}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={routes.bottom} component={BottomTabsNavigation} />
    </MainStack.Navigator>
  );
};
