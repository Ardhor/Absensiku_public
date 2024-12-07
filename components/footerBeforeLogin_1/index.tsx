import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type FooterBeforeLogin ={
    text: string,
    textNavigation: string,
    onPress?: () => void;
}
const index: React.FC<FooterBeforeLogin> = ({ text, textNavigation, onPress }) => {
    return (
        <View style={styles.dontAccountContainer}>
            <Text style={styles.textDontAccount}>
                {text}
                <Text
                    style={styles.signUpText}
                    onPress={onPress}
                >
                    {textNavigation}
                </Text>
            </Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    dontAccountContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    textDontAccount: {
        color: "white",
        fontSize: 19,
    },
    signUpText: {
        color: "#FED40E",
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
})