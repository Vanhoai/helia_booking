import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { routes } from './routes';

export type AuthStackParamList = {
    [routes.splash]: undefined;
    [routes.marker]: undefined;
    [routes.login]: undefined;
    [routes.register]: undefined;
};

export type SplashProps = NativeStackScreenProps<AuthStackParamList, routes.splash>;
export type MarkerProps = NativeStackScreenProps<AuthStackParamList, routes.marker>;
export type LoginProps = NativeStackScreenProps<AuthStackParamList, routes.login>;
export type RegisterProps = NativeStackScreenProps<AuthStackParamList, routes.register>;

export type MainStackParamList = {
    [routes.bottom]: undefined;
    [routes.editProfile]: { id: number };
};

export type BottomProps = NativeStackScreenProps<MainStackParamList, routes.bottom>;
export type EditProfileProps = NativeStackScreenProps<MainStackParamList, routes.editProfile>;
