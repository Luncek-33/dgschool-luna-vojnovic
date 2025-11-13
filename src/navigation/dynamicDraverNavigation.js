import React, { Component } from "react";
import { Text,TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native/types_generated/index";

const screens = require("../data/screen.json");

class DynamicDrawer extends Component {
    render() {
        const {navigation}=this.props;

        return(
            <View>
                <Text>DynamicDrawer</Text>

                
            </View>
        )
    }
}