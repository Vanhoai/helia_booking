import { colors, ThemeColor } from './color';
import { font, Font } from './font';
import { normalize, Normalize } from './normalize';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { RootState, useAppSelector } from '@/hooks/useRedux';
import keys from 'lodash.keys';
import { useMemo } from 'react';
import { baseStyles, BaseStyles } from './baseStyle';

export type ThemeColors = { [key: string]: string };
export type Theme = {
    font: Font;
    colors: ThemeColors | ThemeColor['light'];
    normalize: Normalize;
};

type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type NamedStylesFn<Props extends {}, T> = {
    [P in keyof T]: ((args: Props) => ViewStyle | TextStyle | ImageStyle) | ViewStyle | TextStyle | ImageStyle;
};

type StyleThemFn<Props extends {}, T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>> = (
    args: Theme
) => T | NamedStyles<any> | NamedStylesFn<Props, T>;

type ReturnNameStyled<T, P> = T & P;

export const theme = {
    light: {
        font,
        colors: colors.light,
        normalize,
    },
    dark: {
        font,
        colors: colors.dark,
        normalize,
    },
};

export const useTheme = () => {
    const { theme: themeStore } = useAppSelector((state) => state.root.themeApp);
    return {
        font,
        normalize,
        colors: theme[themeStore || 'light'].colors,
    } as Theme;
};

const createStyle = (styles: any, props?: any) => {
    return keys(styles).reduce((results, key) => {
        if (typeof styles[key] === 'function') {
            results[key] = styles[key](props);
        } else {
            results[key] = styles[key];
        }
        return results;
    }, {} as any);
};

export const makeStyles =
    <Props extends {}>() =>
    <T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>>(
        styles: StyleThemFn<Props, T> | T | NamedStyles<T> | NamedStylesFn<Props, T>
    ) => {
        return (props?: Props) => {
            const { theme: themeStore } = useAppSelector((state: RootState) => state.root.themeApp);
            return useMemo<{
                [P in keyof ReturnNameStyled<T, BaseStyles>]: {};
            }>(
                () =>
                    StyleSheet.create({
                        ...baseStyles,
                        ...createStyle(
                            typeof styles === 'function'
                                ? styles({
                                      ...theme[themeStore || 'light'],
                                  })
                                : styles,
                            props
                        ),
                    }),
                [props, themeStore]
            );
        };
    };
