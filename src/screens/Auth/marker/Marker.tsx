import { Button, Container, Image, SafeArea, TextField } from '@/shared';
import { useTheme } from '@/theme';
import React, { FC, useState } from 'react';
import PagerView from 'react-native-pager-view';
import { arrays, Slide } from './constant';

type ViewOfItemProps = {
    slide: Slide;
};

const ViewOfItem: FC<ViewOfItemProps> = ({ slide }) => {
    return (
        <Container flex alignCenter justifyStart>
            <Container width={'100%'} height={'50%'} backgroundColor="black" overflow="hidden">
                <Image width={'100%'} height={'100%'} source={{ uri: slide.image }} />
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
                    {slide.title}
                </TextField>
                <TextField size={16} lineHeight={20} color="gray" fontFamily="light" style={{ textAlign: 'center' }}>
                    {slide.content}
                </TextField>
            </Container>
        </Container>
    );
};

export const Marker: FC<{}> = () => {
    const { colors } = useTheme();
    const [pageCurrent, setPageCurrent] = useState<number>(0);
    return (
        <SafeArea>
            <Container flex>
                <PagerView
                    style={{ flex: 1 }}
                    initialPage={0}
                    scrollEnabled={true}
                    onPageSelected={(event) => {
                        setPageCurrent(event.nativeEvent.position);
                    }}
                >
                    {arrays.map((value: Slide, index) => (
                        <ViewOfItem key={index} slide={value} />
                    ))}
                </PagerView>
                <Container absolute bottom={0} left={0} right={0} justifyCenter>
                    <Container row justifyCenter>
                        {[0, 1, 2].map((_, index) => {
                            return (
                                <Container
                                    key={index}
                                    height={12}
                                    width={pageCurrent === index ? 30 : 12}
                                    radius={5}
                                    backgroundColor={pageCurrent === index ? colors.primaryColor : colors.greyColor}
                                    marginHorizontal={2}
                                />
                            );
                        })}
                    </Container>

                    <Container padding={20}>
                        <Button title="Next" radius={30} backgroundColor={colors.primaryColor} height={56} />
                        <Container height={12} />
                        <Button
                            radius={30}
                            backgroundColor={colors.backgroundGreen}
                            height={56}
                            justifyCenter
                            alignCenter
                        >
                            <Container justifyCenter alignCenter flex>
                                <TextField color={colors.primaryColor} size={16} fontFamily="bold">
                                    Skip
                                </TextField>
                            </Container>
                        </Button>
                    </Container>
                </Container>
            </Container>
        </SafeArea>
    );
};
