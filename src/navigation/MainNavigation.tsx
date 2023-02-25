import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabsNavigation } from './BottomNavigation';
import { EditProfile } from '@/screens/Main';
import { routes } from './routes';
import { MainStackParamList } from './type';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation: FC<{}> = ({}) => {
    return (
        <MainStack.Navigator
            initialRouteName={routes.bottom}
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name={routes.bottom} component={BottomTabsNavigation} />
            <MainStack.Screen name={routes.editProfile} component={EditProfile} />
        </MainStack.Navigator>
    );
};
