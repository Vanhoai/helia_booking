import AnimatedLottieView from 'lottie-react-native';
import { FC } from 'react';
import { Container } from '../Container';

export const Loading: FC<{}> = () => {
    return (
        <Container
            flex
            justifyCenter
            alignCenter
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <AnimatedLottieView
                source={require('./loading.json')}
                autoPlay
                loop
                style={{
                    height: 100,
                    width: 100,
                }}
            />
        </Container>
    );
};
