/*
KOD OD ZADACE OD PRIJE
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

export default DrawerNavigator;*/

/*KOD OD LEKCIJE easy medium 

import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator, ContactStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import BottomStackNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
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
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;*/

//hard chellange
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomStackNavigator from "./TabNavigator";
import { AboutStackNavigator, ContactStackNavigator, ProfileStackNavigator } from "./StackNavigator";

import screensData from "../data/screen.json";

const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component {
  constructor() {
    super();
    this.state = {
      screens: [],
    };
  }

  componentDidMount() {

    this.setState({ screens: screensData });
  }

  render() {
    const { screens } = this.state;

    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "blue",
          drawerInactiveTintColor: "#38e94fff",
        }}
      >

        {screens.length === 0 && (
          <Drawer.Screen
            name="Loading"
            component={() => null}
            options={{ drawerItemStyle: { display: "none" } }}
          />
        )}

        {screens.map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item.screenName}
            component={
              item.component === "Home"
                ? BottomStackNavigator
                : item.component === "About"
                ? AboutStackNavigator
                : item.component === "Contact"
                ? ContactStackNavigator
                : item.component === "Profile"
                ? ProfileStackNavigator
                : BottomStackNavigator
            }
            options={{
              drawerIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? item.drawerIcon : `${item.drawerIcon}-outline`}
                  size={22}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;

