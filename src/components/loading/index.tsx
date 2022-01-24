import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import Svgloading from '~/svg/svgloading';
import { Content, ContentCenter, TextLoading } from './style';

export default function Loading() {
  const rotateAnimation = new Animated.Value(0);

  const handleAnimation = () => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <Content>
      <ContentCenter>
        <Animated.View style={animatedStyle}>
          <Svgloading width={100} height={100} />
        </Animated.View>
        <TextLoading>Carregando...</TextLoading>
      </ContentCenter>
    </Content>
  );
}
