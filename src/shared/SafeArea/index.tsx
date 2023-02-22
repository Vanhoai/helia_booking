import { makeStyles } from '@/theme';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from '../StatusBar';
import { ContainerProps } from './type';

export const SafeArea: FC<ContainerProps> = (props) => {
    const { statusColor, style, edges, children } = props;
    const styles = useStyles(props);

    return (
        <SafeAreaView edges={edges ?? ['left', 'right']} style={[styles.root, style]}>
            <StatusBar statusColor={statusColor} />
            {children}
        </SafeAreaView>
    );
};

const useStyles = makeStyles<ContainerProps>()(({}) => ({
    root: ({ backgroundColor }) => ({
        flex: 1,
        backgroundColor: backgroundColor,
    }),
}));
