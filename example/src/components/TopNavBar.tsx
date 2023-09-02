import { RoundButton } from './RoundButton';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as React from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import { useNavigation } from '@react-navigation/native';

export const TopNavBar = () => {
  const { width } = useWindowDimensions();
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[{ width: width / 3 }, styles.leftContainer]}>
        <RoundButton icon={<ArrowLeft />} onPress={nav.goBack} />
      </View>
      <View
        style={[
          styles.titleContainer,
          {
            width: width / 3,
          },
        ]}
      >
        <Text style={styles.title}>Header</Text>
      </View>
      <View style={{ width: width / 3 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    borderBottomColor: '#a4a4a4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'tomato',
  },
  leftContainer: {
    paddingLeft: 8,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
