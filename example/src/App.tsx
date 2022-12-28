import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnimatedScrollViewExample } from './screens/AnimatedScrollViewExample';
import { ExamplesDirectory } from './screens/ExamplesDirectory';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ExamplesDirectory" component={ExamplesDirectory} />
        <Stack.Screen
          name="AnimatedScrollViewExample"
          component={AnimatedScrollViewExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
