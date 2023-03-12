// import { normalize } from '@utils/responsive';
import React from 'react';
import { isNumber } from 'lodash';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMargin, handlePadding, handleRound, handleSquare } from '@/shared/function';
import styles from './styles';
import { ContainerProps } from './types';
import { normalize } from '@/theme';

export const Container = ({
    flex,
    flexShrink,
    flexGrow,
    row,
    column,
    space,
    alignStart,
    alignCenter,
    alignEnd,
    justifyCenter,
    justifyEnd,
    justifyStart,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    borderWidth,
    relative,
    absolute,
    borderColor,
    shadowColor,
    elevation,
    maxWidth,
    maxHeight,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    isPaddingIos,
    zIndex,
    borderTopLeftRadius,
    borderTopRightRadius,
    shadow,
    backgroundColor,
    padding,
    margin,
    wrap,
    radius,
    height,
    width,
    square,
    round,
    top,
    left,
    right,
    bottom,
    children,
    overflow,
    alignSelf,
    style,
    opacity,
    ...rest
}: ContainerProps) => {
    const insets = useSafeAreaInsets();

    const blockStyles: {} = [
        isPaddingIos && {
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : normalize.m(20),
        },
        flex && styles.block,
        flexShrink && styles.flexShrink,
        flexGrow && styles.flexGrow,
        !flex && { flex: 0 },
        maxWidth && { maxWidth },
        maxHeight && { maxHeight },
        width && { width: width },
        height && { height: height },
        row && styles.row,
        column && styles.column,
        shadow && {
            ...styles.shadow,
            shadowColor,
            elevation: elevation || 3,
        },
        wrap && { flexWrap: 'wrap' },
        backgroundColor && { backgroundColor },
        padding && { ...handlePadding(normalize.m(padding)) },
        margin && { ...handleMargin(normalize.m(margin)) },
        alignStart && styles.alignStart,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        justifyCenter && styles.justifyCenter,
        justifyStart && styles.justifyStart,
        justifyEnd && styles.justifyEnd,
        space && { justifyContent: `space-${space}` },
        paddingTop && { paddingTop: normalize.v(paddingTop) },
        paddingRight && { paddingRight: normalize.h(paddingRight) },
        paddingBottom && { paddingBottom: normalize.v(paddingBottom) },
        paddingLeft && { paddingLeft: normalize.h(paddingLeft) },
        marginBottom && { marginBottom: normalize.v(marginBottom) },
        marginTop && { marginTop: normalize.h(marginTop) },
        marginRight && { marginRight: normalize.v(marginRight) },
        marginLeft && { marginLeft: normalize.v(marginLeft) },
        paddingHorizontal && { paddingHorizontal: normalize.h(paddingHorizontal) },
        paddingVertical && { paddingVertical: normalize.v(paddingVertical) },
        marginHorizontal && { marginHorizontal: normalize.h(marginHorizontal) },
        marginVertical && { marginVertical: normalize.v(marginVertical) },
        radius && { borderRadius: normalize.m(radius) },
        borderWidth && { borderWidth: borderWidth },
        square && { ...handleSquare(normalize.m(square)) },
        round && { ...handleRound(normalize.m(round)) },
        isNumber(opacity) && { opacity: opacity },
        borderColor && { borderColor },
        relative && { position: 'relative' },
        absolute && { position: 'absolute' },
        isNumber(top) && { top: normalize.h(top) },
        isNumber(left) && { left: normalize.v(left) },
        isNumber(right) && { right: normalize.v(right) },
        isNumber(bottom) && { bottom: normalize.h(bottom) },
        overflow && { overflow },
        alignSelf && { alignSelf },
        borderTopWidth && { borderTopWidth },
        borderRightWidth && { borderRightWidth },
        borderBottomWidth && { borderBottomWidth },
        borderLeftWidth && { borderLeftWidth },
        zIndex && { zIndex },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderTopRightRadius && { borderTopRightRadius },
        { ...StyleSheet.flatten(style) },
    ];

    return (
        <View style={blockStyles} {...rest}>
            {children}
        </View>
    );
};
