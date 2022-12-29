import { Card, Header, OverflowHeaderComponent } from '../components';
import * as React from 'react';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { data, isIOS } from '../utils';

export const OverflowHeaderExample = () => {
  return (
    <AnimatedScrollView
      headerMaxHeight={400}
      topBarHeight={isIOS ? 90 : 70}
      HeaderNavbarComponent={<OverflowHeaderComponent />}
      TopNavBarComponent={<Header />}
      headerImage={require('../../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
