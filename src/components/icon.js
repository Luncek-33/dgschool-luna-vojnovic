import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Icon = (props) => (
  <View>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons style={styles.iconWrapper} name={props.name} size={props.size} color={props.color} />
    </View>
    <Text style={styles.iconText}>{props.iconText}</Text>
  </View>
);

const styles = StyleSheet.create({
    iconWrapper:{
        backgroundColor: "#364053",
        width:"100%",
        height:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    iconContainer:{
        width: 60,
        height: 60,
        alignItems: 'center',
    },
    iconText:{
       height: 20,
       fontWeight: 600,
    }
});
export default Icon;
