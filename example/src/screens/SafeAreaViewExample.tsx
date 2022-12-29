import { Card, TopNavBar, HeaderNavBar } from '../components';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { data } from '../utils';

export const SafeAreaViewExample = () => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <AnimatedScrollView
        HeaderNavbarComponent={<HeaderNavBar />}
        TopNavBarComponent={<TopNavBar />}
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
