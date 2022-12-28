import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const ExamplesDirectory = () => {
  const navigation: any = useNavigation();
  const goTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goTo('AnimatedScrollViewExample')}
        style={styles.button}
      >
        <Text>AnimatedScrollViewExample</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => goTo('SafeAreaViewExample')}
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
