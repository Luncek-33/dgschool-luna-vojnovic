import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to home screen</Text>
            <Button
                title="Go to About screen"
                onPress={()=> navigation.navigate("About")}></Button>
            <Button 
                style={styles.btn}
                title="Go to Contact screen"
                onPress={()=> navigation.navigate("Contact")}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "center"
    },
    btn:{
        marginVertical: 20,
    }
});

export default Home;