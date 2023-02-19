import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, Register} from '../screens/Auth';
import {routes} from './routes';

const AuthStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={routes.login}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={routes.login} component={Login} />
      <AuthStack.Screen name={routes.register} component={Register} />
    </AuthStack.Navigator>
  );
};
