import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const HeaderComponent = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text>Foreground component</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: 'white',
  },
});
