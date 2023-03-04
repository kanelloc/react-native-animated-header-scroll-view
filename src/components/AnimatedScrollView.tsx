import { Animated, ScrollView } from 'react-native';
import React, { forwardRef } from 'react';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import AnimatedNavbar from './AnimatedNavbar';
import type { AnimatedScrollViewProps } from '../types';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';
import { AnimatedHeader } from './AnimatedHeader';

export const AnimatedScrollView = forwardRef<
  ScrollView,
  AnimatedScrollViewProps
>(
  (
    {
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
    }: AnimatedScrollViewProps,
    ref
  ) => {
    const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
    const headerNavHeight = topBarHeight || HEADER_HEIGHT;
    const [scroll, onScroll, scale, translateYDown, translateYUp] =
      useAnimateScrollView(imageHeight, disableScale);

    return (
      <>
        <Animated.ScrollView
          ref={ref}
          onScroll={onScroll}
          scrollEventThrottle={16}
          {...props}
        >
          <AnimatedHeader
            HeaderComponent={HeaderComponent}
            headerImage={headerImage}
            imageStyle={imageStyle}
            imageHeight={imageHeight}
            translateYDown={translateYDown}
            translateYUp={translateYUp}
            scale={scale}
          />
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
  }
);
