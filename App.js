import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomStackNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
   <NavigationContainer>
      <BottomStackNavigator/>
   </NavigationContainer>
  );
}

