import {
  Animated,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import AnimatedNavbar from './AnimatedNavbar';
import type { AnimatedScrollViewProps } from '../types';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';

export const AnimatedScrollView = ({
  TopNavBarComponent,
  HeaderNavbarComponent,
  HeaderComponent,
  headerMaxHeight,
  topBarHeight,
  headerImage,
  disableScale,
  children,
  imageStyle,
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
        {children}
      </Animated.ScrollView>
      <AnimatedNavbar
        headerHeight={headerNavHeight}
        scroll={scroll}
        imageHeight={imageHeight}
        OverflowHeaderComponent={HeaderNavbarComponent}
        TopNavbarComponent={TopNavBarComponent}
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
