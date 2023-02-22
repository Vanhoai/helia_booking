import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, Register, Splash, Marker } from '../screens/Auth';
import { routes } from './routes';

const AuthStack = createNativeStackNavigator();

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            initialRouteName={routes.marker}
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name={routes.splash} component={Splash} />
            <AuthStack.Screen name={routes.marker} component={Marker} />
            <AuthStack.Screen name={routes.login} component={Login} />
            <AuthStack.Screen name={routes.register} component={Register} />
        </AuthStack.Navigator>
    );
};
