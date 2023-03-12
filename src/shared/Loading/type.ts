import Animated from 'react-native-reanimated';

export type LoadingProps = {};

export interface CircleProps {
    borderColor: string;
    additionalRadius?: number;
    rotation?: Animated.SharedValue<number>;
}
