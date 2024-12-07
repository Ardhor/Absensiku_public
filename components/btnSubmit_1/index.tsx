import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type BtnSubmit_1Props = {
    text: string;
    onPress: () => void;
    isActive: boolean;
    disabled: boolean;
}

const index: React.FC<BtnSubmit_1Props> = ({ text, onPress, isActive, disabled }) => {
    const buttonStyle = isActive
        ? styles.loginBtnActive
        : styles.loginBtnDefault;

    const textStyle = isActive
        ? styles.loginBtnTextActive
        : styles.loginBtnTextDefault;

    return (
        <View style={styles.vwBtn}>
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPress}
                disabled={disabled}
            >
                <Text
                style={textStyle}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    vwBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },
    loginBtnTextDefault: {
        color: "#8999a1",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    loginBtnTextActive: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    loginBtnDefault: {
        backgroundColor: "#314b57",
        width: "90%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    loginBtnActive: {
        backgroundColor: "#6A9AB0", // Warna untuk tombol aktif
        width: "90%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
})