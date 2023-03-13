import { isNumber } from '@/utils';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface OnTapProps {
    onTap?: () => void;
    activeOpacity?: number;
}

export interface BaseProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
}

export interface FlexProps {
    flex?: boolean;
    flexDirection?: 'row' | 'column';
    flexGrow?: boolean;
    flexShrink?: boolean;
    alignCenter?: boolean;
    alignStart?: boolean;
    alignEnd?: boolean;
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyCenter?: boolean;
}

export interface LayoutProps {
    width?: number | string;
    height?: number | string;
    padding?: number | string;
    paddingHorizontal?: number | string;
    paddingVertical?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    margin?: number | string;
    marginHorizontal?: number | string;
    marginVertical?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
}

export interface PositionProps {
    position?: 'absolute' | 'relative';
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
}

export interface RadiusProps {
    bottomLeft?: number;
    bottomRight?: number;
    topLeft?: number;
    topRight?: number;
}

export interface BorderProps {
    width?: number;
    color?: string;
}

export type BorderType = {
    top?: BorderProps;
    left?: BorderProps;
    right?: BorderProps;
    bottom?: BorderProps;
};

export const handleRadius = (radius: number | RadiusProps) => {
    if (isNumber(radius)) {
        return {
            borderRadius: radius,
        };
    }
    let borderRadius: { [key: string]: number } = {};
    const gutterKeys = Object.keys(radius) as Array<keyof RadiusProps>;
    gutterKeys.forEach((key) => {
        const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
        if (radius[key] !== undefined) {
            borderRadius[`border${capFirstLetter}Radius`] = radius[key] as number;
        }
    });
    return borderRadius;
};
