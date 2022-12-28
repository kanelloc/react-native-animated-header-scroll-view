import {
  Animated,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import AnimatedHeader from './AnimatedHeader';
import type { AnimatedScrollViewProps } from '../types';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';

export const AnimatedScrollView = ({
  HeaderComponent,
  OverflowHeaderComponent,
  ForegroundComponent,
  headerImgHeight,
  headerHeight,
  headerImage,
  children,
  ...props
}: AnimatedScrollViewProps) => {
  const { width } = useWindowDimensions();
  const imageHeight = headerImgHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = headerHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] =
    useAnimateScrollView(imageHeight);

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

  return (
    <>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        {...props}
      >
        <View
          style={[
            styles.imgContainer,
            {
              marginTop: -imageHeight * 4,
              paddingTop: imageHeight * 4,
            },
          ]}
        >
          {ForegroundComponent ? (
            <>
              {headerImage ? (
                <AnimatedImageBackground
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
                  ]}
                >
                  {ForegroundComponent}
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
                  {ForegroundComponent}
                </Animated.View>
              )}
            </>
          ) : (
            <Animated.Image
              source={headerImage}
              style={[
                { height: imageHeight },
                {
                  transform: [
                    { scale },
                    { translateY: translateYUp },
                    { translateY: translateYDown },
                  ],
                },
              ]}
            />
          )}
        </View>
        {children}
      </Animated.ScrollView>
      <AnimatedHeader
        headerHeight={headerNavHeight}
        scroll={scroll}
        imageHeight={imageHeight}
        OverflowHeaderComponent={OverflowHeaderComponent}
        HeaderComponent={HeaderComponent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
});
