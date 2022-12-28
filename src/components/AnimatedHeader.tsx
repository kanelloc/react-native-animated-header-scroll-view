import React from 'react';
import { StatusBar, StyleSheet, Animated } from 'react-native';
import { useAnimateNavbar } from '../hooks/useAnimateNavbar';
import type { AnimatedHeaderProps } from '../types';

const AnimatedHeader = ({
  scroll,
  imageHeight,
  OverflowHeaderComponent,
  HeaderComponent,
  headerHeight,
}: AnimatedHeaderProps) => {
  const [headerOpacity, overflowHeaderOpacity] = useAnimateNavbar(
    scroll,
    imageHeight,
    headerHeight
  );

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <Animated.View
        style={[
          styles.container,
          {
            height: headerHeight,
            opacity: headerOpacity,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#a4a4a4',
          },
        ]}
      >
        {HeaderComponent}
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            height: headerHeight,
            opacity: overflowHeaderOpacity,
            backgroundColor: 'transparent',
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedHeader;
