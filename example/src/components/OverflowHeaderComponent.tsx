import { RoundButton } from './RoundButton';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import { ArrowRight } from '../icons/ArrowRight';
import { Share } from '../icons/Share';

export const OverflowHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <RoundButton icon={<ArrowLeft />} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          <RoundButton icon={<ArrowRight />} />
        </View>
        <RoundButton icon={<Share />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
