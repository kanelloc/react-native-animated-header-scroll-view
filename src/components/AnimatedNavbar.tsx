import React from 'react';
import { StyleSheet, Animated, useColorScheme } from 'react-native';
import { useAnimateNavbar } from '../hooks/useAnimateNavbar';
import type { AnimatedNavbarProps } from '../types';

const AnimatedNavbar = ({
  scroll,
  imageHeight,
  OverflowHeaderComponent,
  TopNavbarComponent,
  headerHeight,
  headerBackgroundColor,
  borderBottomColor
}: AnimatedNavbarProps) => {
  const [headerOpacity, overflowHeaderOpacity] = useAnimateNavbar(
    scroll,
    imageHeight,
    headerHeight,
  );
  const colorScheme = useColorScheme();

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            zIndex: headerOpacity,
            height: headerHeight,
            opacity: headerOpacity,
            backgroundColor: headerBackgroundColor = colorScheme == 'light' ? '#fff' : '#121212',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: borderBottomColor= colorScheme == 'light' ? 'rgb(216, 216, 216)' : '#222',
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
    paddingTop: 32,
    position: 'absolute',
    elevation: 2,
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overflowHeader: {
    backgroundColor: 'transparent',
  },
});

export default AnimatedNavbar;
