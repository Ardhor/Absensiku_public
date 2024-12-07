// SplashScreen.tsx
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import Spacing from "../../constants/Spacing";
import { useEffect } from "react";
import styles from "../styles/SplashStyle";

const SplashScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>(); //

    useEffect(() => {
        // Simulasi loading
        const timer = setTimeout(() => {
            navigation.replace('Login', { isPasswordReset: false }); // Ganti dengan screen yang ingin dituju
        }, 3000); // waktu

        return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
    }, [navigation]);

    return (
        <SafeAreaView style={styles.safeAreaVW}>
            <View style={styles.positionAbsen}>
                <Text style={styles.textAbsen}>AbsensiKu</Text>
            </View>

        </SafeAreaView>
    );
};

export default SplashScreen;