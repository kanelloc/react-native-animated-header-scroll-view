import * as React from 'react';
import { useRef } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { AnimatedFlatList } from '@kanelloc/react-native-animated-header-scroll-view';
import { data } from '../utils';
import { Card, HeaderNavBar, TopNavBar } from '../components';
import { useRefresh } from '@react-native-community/hooks';

const fetch = () => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
};
export const HeaderNavbarFlatListExample = () => {
  const { isRefreshing, onRefresh } = useRefresh(fetch);
  const scrollRef = useRef<FlatList>(null);
  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Card item={item} />
      </View>
    );
  };

  return (
    <View>
      <AnimatedFlatList
        ref={scrollRef}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            style={styles.refresh}
            progressViewOffset={32} // Add offset to position correctly progressView in iOS
            tintColor="black"
          />
        }
        headerImage={require('../../assets/cabin.jpg')}
        data={data}
        renderItem={renderItem}
        HeaderNavbarComponent={<HeaderNavBar />}
        TopNavBarComponent={<TopNavBar />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  refresh: {
    zIndex: 10,
  },
});
