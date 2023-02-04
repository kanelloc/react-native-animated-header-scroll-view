import React from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { AnimatedFlatListViewProps } from '../types';
import AnimatedHeader from './AnimatedHeader';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';

export const AnimatedFlatList = ({
  headerMaxHeight,
  topBarHeight,
  disableScale,
  TopNavBarComponent,
  HeaderNavbarComponent,
  headerImage,
  imageStyle,
  ...props
}: AnimatedFlatListViewProps) => {
  const { width } = useWindowDimensions();
  const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] =
    useAnimateScrollView(imageHeight, disableScale);

  const ListHeader = () => (
    <View
      style={[
        styles.imgContainer,
        {
          marginTop: -imageHeight * 4,
          paddingTop: imageHeight * 4,
        },
      ]}
    >
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
    </View>
  );

  return (
    <>
      <Animated.FlatList
        {...props}
        onScroll={onScroll}
        ListHeaderComponent={ListHeader}
      />
      <AnimatedHeader
        headerHeight={headerNavHeight}
        scroll={scroll}
        imageHeight={imageHeight}
        OverflowHeaderComponent={HeaderNavbarComponent}
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
