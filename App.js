import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import { CartProvider } from './src/context/cartContext';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </CartProvider>
  );
}
