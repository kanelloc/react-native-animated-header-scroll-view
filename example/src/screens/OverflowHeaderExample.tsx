import { Card, Header, OverflowHeaderComponent } from '../components';
import { AnimatedScrollView } from '../../../src/components/AnimatedScrollView';
import * as React from 'react';
import { Platform } from 'react-native';
const isIos = Platform.OS === 'ios';

export const OverflowHeaderExample = () => {
  const data = Array.from(Array(20).keys());
  return (
    <AnimatedScrollView
      headerImgHeight={400}
      headerHeight={isIos ? 90 : 70}
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
