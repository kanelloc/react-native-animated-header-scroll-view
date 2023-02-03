import React from 'react';
import { StyleSheet, Animated } from 'react-native';
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
      <Animated.View
        style={[
          styles.container,
          styles.header,
          {
            zIndex: headerOpacity,
            height: headerHeight,
            opacity: headerOpacity,
          },
        ]}
      >
        {HeaderComponent}
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#a4a4a4',
  },
  overflowHeader: {
    backgroundColor: 'transparent',
  },
});

export default AnimatedHeader;
