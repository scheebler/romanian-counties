import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/components/Homepage/Homepage';
import Counties from './src/components/Counties/Counties';
import DetailedCouny from './src/components/Counties/DetailedCounty/DetailedCounty';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Counties" component={Counties} />
        <Stack.Screen name="Details" component={DetailedCouny} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
