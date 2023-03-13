import { ThemeColors, useTheme } from '@/theme';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { TextField } from '../TextField';
import { styles } from './style';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
    type = 'outline',
    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    alignCenter,
    alignStart,
    alignEnd,
    justifyStart,
    justifyEnd,
    justifyCenter,
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
    borderRadius,
    backgroundColor,
    pressedBackground,
    color,
    title,
    disabled = false,
    onPress,
    children,
    style,
    ...rest
}) => {
    const { colors } = useTheme();

    const buttonStyle: {} = ({ pressed }: { pressed: boolean }) => {
        StyleSheet.flatten([
            getDefaultButtonStyles({
                type,
                pressed,
                colors,
                backgroundColor,
                pressedBackground,
            }),
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
            flex && { flex },
            flexDirection && { flexDirection },
            flexGrow && { flexGrow },
            flexShrink && { flexShrink },
            alignCenter && { alignItems: 'center' },
            alignStart && { alignItems: 'flex-start' },
            alignEnd && { alignItems: 'flex-end' },
            justifyStart && { justifyContent: 'flex-start' },
            justifyEnd && { justifyContent: 'flex-end' },
            justifyCenter && { justifyContent: 'center' },
            borderRadius && { borderRadius },
            backgroundColor && { backgroundColor },
            style,
        ]);
    };

    return (
        <Pressable onPress={onPress} disabled={disabled} style={[styles.container, buttonStyle]} {...rest}>
            {title ? (
                <TextField color="#FFF" fontFamily="light" fontSize={16} style={styles.title}>
                    {title}
                </TextField>
            ) : (
                children
            )}
        </Pressable>
    );
};

type IProps = {
    type: 'primary' | 'outline';
    colors: ThemeColors;
    pressed: boolean;
    backgroundColor?: string;
    pressedBackground?: string;
};

const getDefaultButtonStyles = ({ type, colors, pressed, backgroundColor, pressedBackground }: IProps) => {
    let buttonDefaultStyle: any = {
        borderRadius: 30,
        backgroundColor: pressed ? colors.focus : colors.primary,
    };

    if (type === 'outline') {
        buttonDefaultStyle.backgroundColor = 'transparent';
        buttonDefaultStyle.opacity = pressed ? 0.6 : 1;
    }
    if (type === 'outline') {
        buttonDefaultStyle.borderColor = colors.focus;
        buttonDefaultStyle.borderWidth = 1;
    }

    if (backgroundColor) {
        buttonDefaultStyle.backgroundColor = colors[backgroundColor] || backgroundColor;
        if (pressed) {
            buttonDefaultStyle.backgroundColor = pressedBackground;
        }
    }
    return buttonDefaultStyle;
};
