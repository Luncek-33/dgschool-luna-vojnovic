import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Contact = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to contact screen</Text>
            <Button
                    title="Go to Home screen"
                    onPress={()=> navigation.goBack("Home")}></Button>
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

export default Contact;