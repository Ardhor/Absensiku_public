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
        marginVertical: Spacing * 12
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
});

export default styles;