import { RoundButton } from './RoundButton';
import { Text, useWindowDimensions, View } from 'react-native';
import * as React from 'react';
import ArrowLeft from '../icons/ArrowLeft';

export const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ width: width / 3 }}>
        <RoundButton icon={<ArrowLeft />} />
      </View>
      <View
        style={{
          width: width / 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Header</Text>
      </View>
      <View style={{ width: width / 3 }} />
    </View>
  );
};
