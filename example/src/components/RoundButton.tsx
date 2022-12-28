import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  icon: JSX.Element;
};
export const RoundButton = ({ icon }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('PRESS');
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
