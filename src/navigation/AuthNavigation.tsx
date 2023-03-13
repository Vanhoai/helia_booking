import { routes } from '@/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, Register, Splash } from '../screens/Auth';

const AuthStack = createNativeStackNavigator();

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            initialRouteName={routes.login}
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name={routes.splash} component={Splash} />
            <AuthStack.Screen name={routes.login} component={Login} />
            <AuthStack.Screen name={routes.register} component={Register} />
        </AuthStack.Navigator>
    );
};
