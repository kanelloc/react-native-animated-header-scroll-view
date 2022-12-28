import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { Card, Header, OverflowHeaderComponent } from '../components';
import * as React from 'react';
import { ForegroundComponent } from '../components/ForegroundComponent';
import { data, isIOS } from '../utils';

export const OnlyForegroundExample = () => {
  return (
    <AnimatedScrollView
      disableScale={true}
      ForegroundComponent={<ForegroundComponent />}
      headerMinHeight={isIOS ? 90 : 70}
      OverflowHeaderComponent={<OverflowHeaderComponent />}
      HeaderComponent={<Header />}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
