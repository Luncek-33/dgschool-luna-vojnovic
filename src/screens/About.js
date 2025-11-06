import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to about screen</Text>
            <Button
                    title="Go to Home screen"
                    onPress={()=> navigation.navigate.goBack()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "center"
    }
});

export default About;