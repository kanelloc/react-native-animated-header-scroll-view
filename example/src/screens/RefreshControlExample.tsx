import { Card, TopNavBar, HeaderNavBar } from '../components';
import * as React from 'react';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { data, isIOS } from '../utils';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const RefreshControlExample = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <AnimatedScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
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
