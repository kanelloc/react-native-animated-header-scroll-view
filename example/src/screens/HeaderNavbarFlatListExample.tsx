import * as React from 'react';
import { View } from 'react-native';
import { AnimatedFlatList } from '@kanelloc/react-native-animated-header-scroll-view';
import { data } from '../utils';
import { Card, HeaderNavBar, TopNavBar } from '../components';

export const HeaderNavbarFlatListExample = () => {
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
        headerImage={require('../../assets/cabin.jpg')}
        data={data}
        renderItem={renderItem}
        HeaderNavbarComponent={<HeaderNavBar />}
        TopNavBarComponent={<TopNavBar />}
      />
    </View>
  );
};

