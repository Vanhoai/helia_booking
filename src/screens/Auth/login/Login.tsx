import { useLoginQuery } from '@/redux/services/auth/authService';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

export const Login: FC<{}> = () => {
    const { data, isFetching, isLoading } = useLoginQuery({ email: 'tvhoai241223@gmail.com', password: 'admin' });

    if (isLoading) return <Text>Loading...</Text>;
    if (!data) return <Text>Missing post!</Text>;

    return (
        <View>
            <Text>
                {JSON.stringify(data)} {isFetching ? '...refetching' : ''}
            </Text>
        </View>
    );
};
