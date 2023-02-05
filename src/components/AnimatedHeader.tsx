import {
  Animated,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import type { AnimatedHeaderProps } from '../types';

export const AnimatedHeader = ({
  HeaderComponent,
  headerImage,
  imageHeight,
  translateYUp,
  translateYDown,
  scale,
  imageStyle,
}: AnimatedHeaderProps) => {
  const { width } = useWindowDimensions();
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  return (
    <View
      style={[
        styles.imgContainer,
        {
          marginTop: -imageHeight * 4,
          paddingTop: imageHeight * 4,
        },
      ]}
    >
      {HeaderComponent ? (
        <>
          {headerImage ? (
            <AnimatedImageBackground
              source={headerImage}
              style={[
                { height: imageHeight, width: width * 1.2 },
                {
                  transform: [
                    { scale: scale },
                    { translateY: translateYUp },
                    { translateY: translateYDown },
                  ],
                },
                imageStyle,
              ]}
            >
              {HeaderComponent}
            </AnimatedImageBackground>
          ) : (
            <Animated.View
              style={[
                { height: imageHeight, width: width * 1.2 },
                {
                  transform: [
                    { scale },
                    { translateY: translateYUp },
                    { translateY: translateYDown },
                  ],
                },
              ]}
            >
              {HeaderComponent}
            </Animated.View>
          )}
        </>
      ) : (
        <Animated.Image
          source={headerImage}
          style={[
            { height: imageHeight, width: width * 1.2 },
            {
              transform: [
                { scale },
                { translateY: translateYUp },
                { translateY: translateYDown },
              ],
            },
            imageStyle,
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
});
