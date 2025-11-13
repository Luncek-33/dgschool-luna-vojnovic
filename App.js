import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigation';

//import BottomStackNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
   <NavigationContainer>
      <DrawerNavigator/>
   </NavigationContainer>
  );
}

