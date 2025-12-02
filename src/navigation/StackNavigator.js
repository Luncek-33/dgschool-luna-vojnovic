import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Contact from "../screens/Contact";
import { Settings } from "react-native";
import settings from "../screens/Settings";
import Ios from "../screens/Ios";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

const ScreenOptionStyle = {
    headerStyle: {
        backgroundColor : "#1d1e29ff",
    },
    headerTintColor: "white",
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            
        </Stack.Navigator>
    )
}
const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            
            <Stack.Screen name="About" component={About}/>
            
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            
            <Stack.Screen name="Profile" component={Profile}/>
            
        </Stack.Navigator>
    )
}

const ContactStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            
            <Stack.Screen name="Contact" component={Contact}/>
            
        </Stack.Navigator>
    )
}

const SettingsStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Settings" component={settings}/>
        </Stack.Navigator>
    )
}

const IosStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Ios" component={Ios}/>
            <Stack.Screen name="Favorites" component={Favorites}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator, ContactStackNavigator, SettingsStackNavigator, IosStackNavigator};
