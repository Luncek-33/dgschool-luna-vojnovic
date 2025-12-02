import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Icon = (props) => (
  <View style={styles.iconWrapperContainer}>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
    </View>
    <Text style={styles.iconText}>{props.iconText}</Text>
  </View>
);

const styles = StyleSheet.create({
  iconWrapperContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: 80,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#364053",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Icon;
