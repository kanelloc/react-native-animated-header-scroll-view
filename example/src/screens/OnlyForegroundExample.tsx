import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { Card, TopNavBar, HeaderNavBar } from '../components';
import * as React from 'react';
import { HeaderComponent } from '../components/HeaderComponent';
import { data, isIOS } from '../utils';

export const OnlyForegroundExample = () => {
  return (
    <AnimatedScrollView
      disableScale={true}
      HeaderComponent={<HeaderComponent />}
      topBarHeight={isIOS ? 90 : 70}
      HeaderNavbarComponent={<HeaderNavBar />}
      TopNavBarComponent={<TopNavBar />}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
