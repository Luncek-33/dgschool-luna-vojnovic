/*import React from "react";
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

export default DrawerNavigator;*/

import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator, ContactStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import BottomStackNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { width } from "cli";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator
      screenOptions={{
        hearderBackground: "#47ff50ff",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "blue",
        drawerInactiveTintColor: "#38e94fff",
        drawerStyle: {
          width: 250,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomStackNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "info" : "info-circle"}
              size={22}
              color={color}
            />
          ),
        }}
      />
     <Drawer.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
        
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "phone" : "phone-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
 <Drawer.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
        
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      
      
    </DrawerNavigator>
  );
};

export default DrawerNavigator;
