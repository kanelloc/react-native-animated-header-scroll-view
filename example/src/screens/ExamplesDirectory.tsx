import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import { SCREENS } from '../utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'ExamplesDirectory'>;
export const ExamplesDirectory = ({ navigation }: Props) => {
  const goTo = (screen: SCREENS) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goTo(SCREENS.SIMPLE_EXAMPLE)}
        style={styles.button}
      >
        <Text>SimpleExample</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo(SCREENS.OVERFLOW_HEADER_EXAMPLE)}
        style={styles.button}
      >
        <Text>OverflowHeaderExample</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => goTo(SCREENS.SAFE_AREA_VIEW_EXAMPLE)}
        style={styles.button}
      >
        <Text>SafeAreaViewExample</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 24,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
