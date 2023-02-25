import { BottomProps, routes } from '@/navigation';
import { Button, Container, SafeArea, TextField } from '@/shared';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';

export const Profile: FC<{}> = ({}) => {
    const navigation = useNavigation<BottomProps['navigation']>();

    const goToEditProfile = () => {
        navigation.navigate(routes.editProfile, { id: 1 });
    };

    return (
        <SafeArea>
            <Container>
                <TextField>Search</TextField>
                <Button title="Edit" onPress={goToEditProfile} />
            </Container>
        </SafeArea>
    );
};
