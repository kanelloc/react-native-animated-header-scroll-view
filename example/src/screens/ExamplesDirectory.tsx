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

  const examples = [
    { screen: SCREENS.HEADER_NAVBAR_EXAMPLE },
    { screen: SCREENS.SAFE_AREA_VIEW_EXAMPLE },
    { screen: SCREENS.IMAGE_FOREGROUND_EXAMPLE },
    { screen: SCREENS.ONLY_FOREGROUND_EXAMPLE },
  ];

  return (
    <View style={styles.container}>
      {examples.map((e) => {
        return (
          <TouchableOpacity
            key={e.screen}
            onPress={() => goTo(e.screen)}
            style={styles.button}
          >
            <Text>{e.screen}</Text>
          </TouchableOpacity>
        );
      })}
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
