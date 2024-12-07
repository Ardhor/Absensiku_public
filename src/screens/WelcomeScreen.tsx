import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>WelcomeScreen</Text>
                <TitleAbsensiKu />
            </SafeAreaView>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})