import React, { FC } from 'react';
import { Container, TextField, Image } from '@/shared';
import PagerView from 'react-native-pager-view';

export const Marker: FC<{}> = () => {
    const arrays = [
        {
            image: 'https://i.pinimg.com/564x/8d/1f/fe/8d1ffea4d0f59ea2ee4b5c52b6a7234c.jpg',
            title: 'Travel safely, comfortably, & easily',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
        },
        {
            image: 'https://i.pinimg.com/736x/6d/51/40/6d5140c75b0b0daa3545bfd18d2d5e00.jpg',
            title: 'Find the best hotels for your vacation',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
        },
        {
            image: 'https://i.pinimg.com/564x/ad/c7/ec/adc7eccb5e2ae25c917b6483aef1e743.jpg',
            title: `Let's discover the world with us`,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
        },
    ];
    const viewOfItem = ({ image, title, content }, index) => {
        return (
            <Container key={index} flex alignCenter justifyStart>
                <Container width={'100%'} height={'50%'} backgroundColor="black">
                    <Image width={'100%'} height={'100%'} source={{ uri: image }} />
                </Container>
                <Container padding={12}>
                    <TextField
                        size={26}
                        lineHeight={30}
                        marginTop={24}
                        marginBottom={12}
                        fontFamily="bold"
                        style={{ textAlign: 'center' }}
                    >
                        {title}
                    </TextField>
                    <TextField
                        size={16}
                        lineHeight={20}
                        color="gray"
                        fontFamily="light"
                        style={{ textAlign: 'center' }}
                    >
                        {content}
                    </TextField>
                </Container>
            </Container>
        );
    };

    return (
        <Container flex>
            <PagerView style={{ flex: 1 }} initialPage={0} scrollEnabled={true}>
                {arrays.map((value, index) => viewOfItem(value, index))}
            </PagerView>
        </Container>
    );
};
