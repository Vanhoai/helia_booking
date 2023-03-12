import { EditProfileProps } from '@/navigation';
import { Button, Container, SafeArea, TextField } from '@/shared';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';

export const EditProfile: FC<{}> = ({}) => {
    const route = useRoute<EditProfileProps['route']>();
    const navigation = useNavigation<EditProfileProps['navigation']>();

    console.log(route.params.id);

    const back = () => {
        navigation.popToTop();
    };

    return (
        <SafeArea>
            <Container flex>
                <TextField>EditProfile</TextField>
                <Button title="Bottom" onPress={back} />
            </Container>
        </SafeArea>
    );
};
