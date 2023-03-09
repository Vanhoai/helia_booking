import { Portal } from '@gorhom/portal';
import { useBackHandler } from '@/hooks';
import { makeStyles, useTheme } from '@/theme';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '@/shared';

interface ModalProps {
    id: string;
    isVisible: boolean;
    onRequestClose?: () => void;
    transparent?: boolean;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ id, isVisible, transparent, onRequestClose, children }) => {
    const { colors } = useTheme();
    const { height: deviceHeight } = useWindowDimensions();
    const dispatch = useDispatch();
    const progress = useRef(new Animated.Value(0)).current;
    const [modalShow, setModalShow] = useState(false);
    const isMount = useRef(false);
    const styles = useStyles();

    useEffect(() => {
        if (isVisible) {
            setModalShow(true);
            isMount.current = true;
        }
        Animated.timing(progress, {
            toValue: isVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            if (!isVisible) {
                setModalShow(false);
            }
        });
    }, [dispatch, id, isVisible, progress]);

    useBackHandler({
        enabled: isVisible,
        callback: () => {
            onRequestClose && onRequestClose();
        },
    });

    const translateY = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [deviceHeight, 0],
        extrapolate: 'clamp',
    });

    if (!modalShow) {
        return <Container />;
    }

    return (
        <Portal name={id}>
            <Container style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
                <Animated.View
                    style={[
                        styles.modalStyle,
                        !transparent && { backgroundColor: colors.white },
                        { transform: [{ translateY }] },
                    ]}
                >
                    {children}
                </Animated.View>
            </Container>
        </Portal>
    );
};

const useStyles = makeStyles()(({ colors }) => ({
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backgroundGreen,
    },
}));
