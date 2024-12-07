import Spacing from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaVW: {
        flex: 1,
        padding: 15,
        backgroundColor: "#557C56",
    },
    vwTextForgot: {
        alignItems: "flex-start",
        marginTop: Spacing * 2,
        marginLeft: 20,
    },
    textForgotYellow: {
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
        marginTop: Spacing * 1.5,
    },
    inputAccount: {
        backgroundColor: "#EAD8B1",
        padding: 20,
        borderRadius: 10,
        width: "90%",
        fontSize: 19,
        color: "#000",
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    vwBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textBtnDefault: {
        color: "#8999a1",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    textBtnActive: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    nextBtnDefault: {
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
    nextBtnActive: {
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
    footerContainer: {
        marginTop: Spacing * 5,
        justifyContent: "center",
        alignItems: "center",

    },
    footerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    footerText: {
        textAlign: "center",
        fontSize: 19,
        color: "white",
        fontWeight: "600",
    },
});

export default styles;