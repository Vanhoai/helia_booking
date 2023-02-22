import AnimatedLottieView from 'lottie-react-native';
import { FC } from 'react';
import { Container } from '../Container';

export const Loading: FC<{}> = () => {
    return (
        <Container
            flex
            absolute
            top={0}
            bottom={0}
            left={0}
            right={0}
            justifyCenter
            alignCenter
            backgroundColor="rgba(255, 255, 255, 0.5)"
            zIndex={999}
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
