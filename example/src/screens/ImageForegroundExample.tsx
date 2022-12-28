import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { Card, Header, OverflowHeaderComponent } from '../components';
import * as React from 'react';
import { ForegroundComponent } from '../components/ForegroundComponent';
import { data, isIOS } from '../utils';

export const ImageForegroundExample = () => {
  return (
    <AnimatedScrollView
      ForegroundComponent={<ForegroundComponent />}
      headerImgHeight={200}
      headerHeight={isIOS ? 90 : 70}
      OverflowHeaderComponent={<OverflowHeaderComponent />}
      HeaderComponent={<Header />}
      headerImage={require('../../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
