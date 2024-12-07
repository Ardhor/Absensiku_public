import Spacing from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaVW: {
        flex: 1,
        padding: 15,
        backgroundColor: "#557C56",
    },
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
    otpContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: Spacing * 1.5,
    },
    panel: {
        padding: 25,
        backgroundColor: "#c0c4c0",
        width: "90%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    contentPanel: {
        justifyContent: "center",
        alignItems: "center",
    },
    verifText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    instructionText: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: "400",
        width: "100%",
        textAlign: "center",
    },
    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: Spacing,
    },
    otpInput: {
        backgroundColor: "white",
        width: 65,
        height: 60,
        borderRadius: 15,
        textAlign: 'center',
        fontSize: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        fontWeight: "700",
    },
    resendContainer: {
        marginTop: Spacing,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    resendText: {
        fontSize: 17,
        fontWeight: "400",
    },
    linkText: {
        fontWeight: "800"
    },
    btnContainer: {
        marginTop: Spacing,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 15
    },
    btnDefault: {
        backgroundColor: "#bab9b9",
        width: "100%",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        alignItems: "center"
    },
    btnActive: {
        backgroundColor: "#636060",
        width: "100%",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        alignItems: "center"
    },
    btnText: {
        fontSize: 19,
        fontWeight: "800",
        textAlign: "center",
        color: "#8a8787"
    },
    btnTextActive: {
        fontSize: 19,
        fontWeight: "800",
        textAlign: "center",
        color: "#ffffff"
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
    iconPanel: {
        padding: 15,
        backgroundColor: "#f7f7f7",
        marginBottom: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    }
});

export default styles;