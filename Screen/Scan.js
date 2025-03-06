import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Scan = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scan Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8" },
    text: { fontSize: 20, fontWeight: "bold" },
});

export default Scan;