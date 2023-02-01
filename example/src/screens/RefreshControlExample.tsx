import { Card, TopNavBar, HeaderNavBar } from '../components';
import * as React from 'react';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { data, isIOS } from '../utils';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRefresh } from '@react-native-community/hooks';

const fetch = () => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
};

export const RefreshControlExample = () => {
  const { isRefreshing, onRefresh } = useRefresh(fetch);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <AnimatedScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            style={styles.refresh}
            progressViewOffset={32} // Add offset to position correctly progressView in iOS
            tintColor="black"
          />
        }
        headerMaxHeight={400}
        topBarHeight={isIOS ? 90 : 70}
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
  refresh: {
    zIndex: 10,
  },
});
