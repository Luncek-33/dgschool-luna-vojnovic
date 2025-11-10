import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const About = ({ navigation }) => {

    const info = [
        { id: '1', text: 'This app has three screens.' },
        { id: '2', text: 'Built with React Native for both iOS and Android.' },
        { id: '3', text: 'Lightweight, fast, and easy to use.' }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to About Screen</Text>

            <FlatList
                data={info}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.listItem}>• {item.text}</Text>
                )}
                style={{ marginVertical: 20 }}
            />

            <Button
                title="Go to Home screen"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15
    },
    listItem: {
        fontSize: 16,
        marginVertical: 5
    }
});

export default About;
