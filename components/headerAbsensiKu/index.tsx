import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Spacing from "../../constants/Spacing";

const index = () => {
    return (
        <View style={styles.positionAbsen}>
            <Text style={styles.textAbsen}>AbsensiKu</Text>
        </View>
    )
}

export default index;

const styles = StyleSheet.create({
    positionAbsen: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: Spacing * 1.5,
    },
    textAbsen: {
        color: "#FED40E",
        fontSize: 60,
        fontWeight: "bold",
        fontStyle: "italic",
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
})
