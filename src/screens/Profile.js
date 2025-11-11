import React from "react";
import { View,Text, StyleSheet } from "react-native";

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems: "center"
    },
    txt:{
        fontSize: 20,
        fontWeight:"bold"
    }
});

export default Profile;