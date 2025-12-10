import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AboutStackNavigator, ProfileStackNavigator, ContactStackNavigator, SettingsStackNavigator, IosStackNavigator, AndroidStackNavigator, CartStackNavigator,  } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ios from "../screens/Ios";
import Android from "../screens/Android";

const Tab = createBottomTabNavigator();

class BottomStackNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badge: 0,
    };
  }

  handleTabFocus = (routeName) => {
    if (routeName === "Settings") {
      this.setState((prevState) => ({
        badge: prevState.badge + 1,
      }));
    }
  };

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "lightgray",
          tabBarStyle: { backgroundColor: "#1d1e29ff" },
          tabBarLabelStyle: { fontSize: 12 },
          headerShown: false,
        }}
        
        screenListeners={{
          focus: (e) => {
            this.handleTabFocus(e.target?.split('-')[0]); 
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainStackNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackNavigator}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="video-stabilization" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactStackNavigator}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="phone" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackNavigator}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" size={26} color={color} />
            ),
            tabBarBadge: this.state.badge > 0 ? this.state.badge : undefined,
          }}
        />
       
            <Tab.Screen
          name="Ios"
          component={IosStackNavigator}
          options={{
            tabBarLabel: "IOS",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="apple" size={26} color={color} />
            ),
          }}
        />

           <Tab.Screen
          name="Android"
          component={AndroidStackNavigator}
          options={{
            tabBarLabel: "Android",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="android" size={26} color={color} />
            ),
          }}
        />

          <Tab.Screen
          name="Cart"
          component={CartStackNavigator}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" size={26} color={color} />
            ),
          }}
        />

   
      </Tab.Navigator>
    );
  }
}

export default BottomStackNavigator;
