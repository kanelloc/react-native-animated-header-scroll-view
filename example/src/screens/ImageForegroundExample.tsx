import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { Card, Header, OverflowHeaderComponent } from '../components';
import * as React from 'react';
import { Platform } from 'react-native';
import { ForegroundComponent } from '../components/ForegroundComponent';
const isIOS = Platform.OS === 'ios';

export const ImageForegroundExample = () => {
  const data = Array.from(Array(20).keys());
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
