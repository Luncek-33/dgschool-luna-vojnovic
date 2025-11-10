import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigation';

export default function App() {
  return (
   <NavigationContainer>
      <DrawerNavigator/>
   </NavigationContainer>
  );
}

