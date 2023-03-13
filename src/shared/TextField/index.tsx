import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { fontFamilySetup } from 'theme';
import { TextProps } from './type';

export const TextField: React.FC<TextProps> = ({
    fontFamily = 'regular',
    width,
    height,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginHorizontal,
    marginVertical,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    children,
    numberOfLines,
    fontSize,
    color,
    style,
    ...rest
}) => {
    const textStyle: {} = StyleSheet.flatten([
        width && { width },
        height && { height },
        padding && { padding },
        paddingHorizontal && { paddingHorizontal },
        paddingVertical && { paddingVertical },
        paddingLeft && { paddingLeft },
        paddingRight && { paddingRight },
        paddingTop && { paddingTop },
        paddingBottom && { paddingBottom },
        margin && { margin },
        marginHorizontal && { marginHorizontal },
        marginVertical && { marginVertical },
        marginLeft && { marginLeft },
        marginRight && { marginRight },
        marginTop && { marginTop },
        marginBottom && { marginBottom },
        fontSize && { fontSize },
        color && { color },
        { fontFamily: fontFamilySetup[fontFamily] },
        { ...StyleSheet.flatten(style) },
    ]);

    return (
        <RNText style={textStyle} {...rest}>
            {children}
        </RNText>
    );
};
