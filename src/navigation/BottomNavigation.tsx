import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home, Profile} from '../screens/Main';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.home} component={Home} />
      <Tab.Screen name={routes.profile} component={Profile} />
    </Tab.Navigator>
  );
};
