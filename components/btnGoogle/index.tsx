import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import Spacing from "../../constants/Spacing";

// Tambahkan prop onPress
interface BtnGoogleProps {
    onPress?: () => void;
}

const index: React.FC<BtnGoogleProps> = ({ onPress }) => {
    return (
        <View style={styles.googleContainer}>
            <TouchableOpacity
                style={styles.googleBtn}
                onPress={onPress} // Tindakan ketika tombol ditekan
            >
                <Image
                    style={styles.googleLogo}
                    source={require("../../assets/images/google-logo.png")}
                />
                <Text style={styles.googleBtnText}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    googleContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    googleBtn: {
        backgroundColor: "#f2f6f2",
        width: "90%",
        padding: 16,
        borderRadius: 10,
    },
    googleBtnText: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "700",
    },
    googleLogo: {
        width: 28,
        height: 28,
        position: "absolute",
        left: 15,
        top: 13,
    },
})