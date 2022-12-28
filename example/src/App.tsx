import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverflowHeaderExample } from './screens/OverflowHeaderExample';
import { ExamplesDirectory } from './screens/ExamplesDirectory';
import { SafeAreaViewExample } from './screens/SafeAreaViewExample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SimpleExample } from './screens/SimpleExample';
import type { RootStackParamList } from './types';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="ExamplesDirectory"
            component={ExamplesDirectory}
          />
          <Stack.Screen
            name="OverflowHeaderExample"
            component={OverflowHeaderExample}
          />
          <Stack.Screen name="SimpleExample" component={SimpleExample} />
          <Stack.Screen
            name="SafeAreaViewExample"
            component={SafeAreaViewExample}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
