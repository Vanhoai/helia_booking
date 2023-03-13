import { TextProps as RNTextProps } from 'react-native';
import { LayoutProps } from 'types';

export interface TextProps extends RNTextProps, LayoutProps {
    fontFamily?: 'light' | 'regular' | 'medium' | 'bold';
    fontSize?: number;
    color?: string;
}
