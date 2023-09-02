import { Card, HeaderNavBar, TopNavBar } from '../components';
import * as React from 'react';
import { useRef } from 'react';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { data, isIOS } from '../utils';
import type { ScrollView } from 'react-native';

export const HeaderNavBarExample = () => {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <AnimatedScrollView
      ref={scrollRef}
      headerMaxHeight={400}
      topBarHeight={isIOS ? 90 : 80}
      HeaderNavbarComponent={<HeaderNavBar />}
      TopNavBarComponent={<TopNavBar />}
      headerImage={require('../../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
