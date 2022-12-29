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
  TopNavBarComponent,
  OverflowNavbarComponent,
  HeaderComponent,
  headerMaxHeight,
  topBarHeight,
  headerImage,
  disableScale,
  children,
  ...props
}: AnimatedScrollViewProps) => {
  const { width } = useWindowDimensions();
  const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] =
    useAnimateScrollView(imageHeight, disableScale);

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
          {HeaderComponent ? (
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
        OverflowHeaderComponent={OverflowNavbarComponent}
        HeaderComponent={TopNavBarComponent}
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
