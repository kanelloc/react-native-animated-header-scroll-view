import { AnimatedScrollView } from '../../../src/components/AnimatedScrollView';
import { Card, Header, OverflowHeaderComponent } from '../components';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const SafeAreaViewExample = () => {
  const data = Array.from(Array(20).keys());
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <AnimatedScrollView
        headerImgHeight={400}
        headerHeight={90}
        OverflowHeaderComponent={<OverflowHeaderComponent />}
        HeaderComponent={<Header />}
        headerImage={require('../../assets/cabin.jpg')}
      >
        {data.map((e) => {
          return <Card item={e} key={e} />;
        })}
      </AnimatedScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
