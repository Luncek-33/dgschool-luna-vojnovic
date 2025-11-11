import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MainStackNavigator} from "./StackNavigator"; 
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      
      <Drawer.Screen name="MainStack" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
