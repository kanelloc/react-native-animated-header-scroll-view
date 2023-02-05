import React from 'react';
import { Animated } from 'react-native';
import type { AnimatedFlatListViewProps } from '../types';
import AnimatedNavbar from './AnimatedNavbar';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';
import { AnimatedHeader } from './AnimatedHeader';

export const AnimatedFlatList = ({
  headerMaxHeight,
  topBarHeight,
  disableScale,
  TopNavBarComponent,
  HeaderNavbarComponent,
  headerImage,
  imageStyle,
  HeaderComponent,
  ...props
}: AnimatedFlatListViewProps) => {
  const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] =
    useAnimateScrollView(imageHeight, disableScale);

  return (
    <>
      <Animated.FlatList
        {...props}
        onScroll={onScroll}
        ListHeaderComponent={
          <AnimatedHeader
            HeaderComponent={HeaderComponent}
            headerImage={headerImage}
            imageStyle={imageStyle}
            imageHeight={imageHeight}
            translateYDown={translateYDown}
            translateYUp={translateYUp}
            scale={scale}
          />
        }
      />
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
