import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnimatedScrollViewExample } from './screens/AnimatedScrollViewExample';
import { ExamplesDirectory } from './screens/ExamplesDirectory';
import { SafeAreaViewExample } from './screens/SafeAreaViewExample';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="ExamplesDirectory"
            component={ExamplesDirectory}
          />
          <Stack.Screen
            name="AnimatedScrollViewExample"
            component={AnimatedScrollViewExample}
          />
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
