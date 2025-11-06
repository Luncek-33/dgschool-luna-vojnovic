import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const ScreenOptionStyle = {
    headerStyle: {
        backgroundColor : "#FF6347",
    },
    headerTintColor: "white",
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator;