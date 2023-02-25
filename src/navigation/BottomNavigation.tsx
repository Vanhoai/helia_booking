import { Booking, Home, Profile, Search } from '@/screens/Main';
import { Button, Container } from '@/shared';
import { useTheme } from '@/theme';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Animated } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { MainStackParamList } from './MainNavigation';
import { routes } from './routes';

export type BottomTabsNavigationProps = NativeStackScreenProps<MainStackParamList, routes.bottom>;

export type BottomTabParamsList = {
    [routes.home]: undefined;
    [routes.search]: undefined;
    [routes.booking]: undefined;
    [routes.profile]: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamsList>();
type BottomType = keyof BottomTabParamsList;

const bottoms = [
    {
        route: 'Home',
        label: 'Home',
        component: Home,
        activeIcon: 'ios-grid',
        inactiveIcon: 'ios-grid-outline',
    },
    {
        route: 'Search',
        label: 'Search',
        component: Search,
        activeIcon: 'search',
        inactiveIcon: 'search-outline',
    },
    {
        route: 'Booking',
        label: 'Booking',
        component: Booking,
        activeIcon: 'ios-calendar',
        inactiveIcon: 'ios-calendar-outline',
    },
    {
        route: 'Profile',
        label: 'Profile',
        component: Profile,
        activeIcon: 'person-circle-sharp',
        inactiveIcon: 'person-circle-outline',
    },
];

export const BottomTabsNavigation: FC<BottomTabsNavigationProps> = ({}) => {
    const { colors } = useTheme();

    const TabBarButton = (props: any) => {
        const { route, accessibilityState, onPress } = props;
        const focused = accessibilityState.selected;

        return (
            <Button flex alignCenter justifyCenter onPress={onPress}>
                <Container flex alignCenter justifyCenter>
                    <Animated.View>
                        <IonIcons
                            name={focused ? route.activeIcon : route.inactiveIcon}
                            size={24}
                            color={focused ? colors.primaryColor : colors.textGreyColor}
                        />
                    </Animated.View>
                </Container>
            </Button>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName={routes.home}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    right: 12,
                    borderRadius: 12,
                },
            }}
        >
            {bottoms.map((route, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={route.route as BottomType}
                        component={route.component as any}
                        options={{
                            tabBarLabel: route.label,
                            tabBarShowLabel: false,
                            tabBarIcon: ({ color, focused }) => {
                                return (
                                    <IonIcons
                                        name={focused ? route.activeIcon : route.inactiveIcon}
                                        size={24}
                                        color={color}
                                    />
                                );
                            },
                            tabBarButton: (props) => <TabBarButton {...props} route={route} />,
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
};
