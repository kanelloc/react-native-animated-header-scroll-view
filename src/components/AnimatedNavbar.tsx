import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { useAnimateNavbar } from '../hooks/useAnimateNavbar';
import type { AnimatedNavbarProps } from '../types';

const AnimatedNavbar = ({
  scroll,
  imageHeight,
  OverflowHeaderComponent,
  TopNavbarComponent,
  headerHeight,
  headerElevation,
}: AnimatedNavbarProps) => {
  const [headerOpacity, overflowHeaderOpacity] = useAnimateNavbar(
    scroll,
    imageHeight,
    headerHeight
  );

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            zIndex: headerOpacity,
            height: headerHeight,
            opacity: headerOpacity,
            elevation: headerElevation,
          },
        ]}
      >
        {TopNavbarComponent}
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          styles.overflowHeader,
          {
            zIndex: overflowHeaderOpacity,
            height: headerHeight,
            opacity: overflowHeaderOpacity,
          },
        ]}
      >
        {OverflowHeaderComponent}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overflowHeader: {
    backgroundColor: 'transparent',
  },
});

export default AnimatedNavbar;
