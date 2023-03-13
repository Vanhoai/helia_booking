import { ButtonProps as RNButtonProps } from 'react-native';
import { BaseProps, FlexProps, LayoutProps } from 'types';

export interface ButtonProps extends RNButtonProps, FlexProps, BaseProps, LayoutProps {
    type?: 'primary' | 'outline';
    activeOpacity?: number;
    backgroundColor?: string;
    borderRadius?: number;
    pressedBackground?: string;
    onPress?: () => void;
}
