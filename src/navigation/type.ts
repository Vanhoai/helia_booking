import { routes } from '@/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
    [routes.splash]: undefined;
    [routes.login]: undefined;
    [routes.register]: undefined;
};

export type SplashProps = NativeStackScreenProps<AuthStackParamList, routes.splash>;
export type LoginProps = NativeStackScreenProps<AuthStackParamList, routes.login>;
export type RegisterProps = NativeStackScreenProps<AuthStackParamList, routes.register>;

export type MainStackParamList = {
    [routes.bottom]: undefined;
    [routes.editProfile]: undefined;
};

export type BottomProps = NativeStackScreenProps<MainStackParamList, routes.bottom>;
export type EditProfileProps = NativeStackScreenProps<MainStackParamList, routes.editProfile>;
