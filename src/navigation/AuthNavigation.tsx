import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, Register, Splash, Marker } from '../screens/Auth';
import { routes } from './routes';
import { AuthStackParamList } from './type';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            initialRouteName={routes.splash}
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
