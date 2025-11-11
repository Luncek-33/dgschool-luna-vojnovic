import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: {
          backgroundColor: "#FF6347",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
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
            <MaterialCommunityIcons
              name="video-stabilization"
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="user"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;
