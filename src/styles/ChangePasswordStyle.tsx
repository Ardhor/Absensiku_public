
import { StyleSheet } from "react-native";
import Spacing from "../../constants/Spacing";



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
    Container: {
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
    footerContainer: {
        marginTop: Spacing * 3,
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
    },
    contentPanel: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleContent: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    messageContent: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: "400",
        width: "100%",
        textAlign: "center",
    },
    PasswordContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    Password: {
        fontSize: 17,
        color: "#000",
        width: "100%",
    },
    inputPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginVertical: 5,
        position: 'relative',
    },
    iconEye: {
        position: 'absolute',
        right: 15, // Tempatkan ikon di sisi kanan
        top: 15, // Sesuaikan dengan posisi vertikal yang diinginkan
    },
    btnContainer: {
        marginTop: 20,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

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
    checkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        alignSelf: "flex-start"
    },
    checkTextDefault: {
        marginLeft: 7,
        fontSize: 14,
        color: "#000",
        fontWeight: "500"
    },
    checkTextActive: {
        marginLeft: 7,
        fontSize: 14,
        color: "green",
        fontWeight: "500"
    }
});

export default styles;