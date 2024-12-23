import Spacing from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaVW: {
        flex: 1,
        padding: 15,
        backgroundColor: "#557C56",
    },
    vwTextLogin: {
        alignItems: "flex-start",
        marginTop: Spacing,
        marginLeft: 20,
    },
    textLoginYellow: {
        color: "#FED40E",
        fontSize: 35,
        fontWeight: "600",
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    vwInputAccount: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#EAD8B1",
        borderRadius: 10,
        padding: 20,
        marginVertical: 15,
        position: "relative",
    },
    inputAccount: {
        fontSize: 19,
        color: "#000",
        width: "85%",
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        backgroundColor: "#EAD8B1",
        borderRadius: 10,
        padding: 20,
        position: "relative",

    },
    iconContainer: {
        position: "absolute",
        right: 15, // Tempatkan ikon di sisi kanan
        top: 15, // Sesuaikan dengan posisi vertikal yang diinginkan
    },
    passwordAccount: {
        fontSize: 19,
        color: "#000",
        width: "85%",
    },
    vwForgotPwd: {
        marginVertical: 15,
        alignItems: "flex-end",
        marginHorizontal: Spacing,
    },
    txForgotPwd: {
        color: "white",
        fontSize: 15,
    },
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
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
    },
    orLine: {
        height: 3,
        backgroundColor: "#c4c4c4",
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    orText: {
        color: "#FEFAE0",
        fontSize: 16,
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
});

export default styles;