import React, { FC } from 'react';
import { makeStyles, useTheme } from '@/theme';
import { View, StatusBar as RNStatusBar, ViewProps } from 'react-native';
import { getStatusBarHeight } from './height';
import { useAppSelector } from '@/hooks/useRedux';

export type StatusBarProps = {
    statusColor?: string;
    children?: ViewProps;
};

export const StatusBar: FC<StatusBarProps> = (props) => {
    const { theme: themeStore } = useAppSelector((state) => state.root.themeApp);
    const styles = useStyles(props);
    const theme = useTheme();
    const { statusColor, children } = props;

    return (
        <View
            {...children}
            style={[
                styles.root,
                {
                    backgroundColor: statusColor || theme.colors.white,
                },
            ]}
        >
            <RNStatusBar
                translucent
                animated
                barStyle={themeStore === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={statusColor || theme.colors.background}
            />
        </View>
    );
};

const useStyles = makeStyles<StatusBarProps>()(({}) => ({
    root: {
        height: getStatusBarHeight(),
    },
}));
