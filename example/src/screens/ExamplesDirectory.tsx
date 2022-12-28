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
      <TouchableOpacity onPress={() => goTo('AnimatedScrollViewExample')}>
        <Text>TEST</Text>
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
});
