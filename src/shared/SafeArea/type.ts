import { Edge } from 'react-native-safe-area-context';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export type SafeAreaProps = {
    statusColor?: string;
    edges?: Edge[];
    backgroundColor?: string;
} & ViewProps;
