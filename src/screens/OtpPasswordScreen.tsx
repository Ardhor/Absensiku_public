import React, { useState, useRef } from "react";
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ModalError from "../../assets/CustomAlert/ModalError";
import ModalSuccess from "../../assets/CustomAlert/ModalSuccess";
import styles from "../styles/OtpPasswordStyle";
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";

const OtpPasswordScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [otp, setOtp] = useState(["", "", "", ""]); // State untuk OTP
    const inputRefs = useRef<(TextInput | null)[]>(Array(6).fill(null)); // Array untuk menyimpan referensi TextInput

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const handleResend = () => {
        setModalTitle("Success");
        setModalMessage("Check Your Email For OTP Code!");
        setShowSuccess(true);

        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
        return;
    };

    const handleInputChange = (index: number, value: string) => {
        // Hanya izinkan angka 0-9
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;

            if (value !== "" && index < otp.length - 1) {
                newOtp[index + 1] = ""; // Reset input berikutnya
                inputRefs.current[index + 1]?.focus(); // Fokus ke input berikutnya
            } else if (value === "" && index > 0) {
                // Jika dihapus, fokus ke input sebelumnya
                inputRefs.current[index - 1]?.focus();
            }

            setOtp(newOtp);
        }
    };

    const handleVerify = () => {
        const isOtpComplete = otp.every(value => value.length > 0);
        if (!isOtpComplete) {
            setModalTitle("Error");
            setModalMessage("Please fill in all OTP fields!");
            setShowError(true);

            setOtp(["", "", "", ""]); // Clear input
            inputRefs.current[0]?.focus();
        } else {
            setModalTitle("Success");
            setModalMessage("OTP Code Verified!");
            setShowSuccess(true);
            navigation.push("Change")
        }
    };

    const isActive = otp.every(value => value.length > 0);

    return (
        <SafeAreaView style={styles.safeAreaVW}>
            <ModalError
                visible={showError}
                title={modalTitle}
                message={modalMessage}
                onClose={() => setShowError(false)}
            />
            <ModalSuccess
                visible={showSuccess}
                title={modalTitle}
                message={modalMessage}
                onClose={() => setShowSuccess(false)}
            />
            <ScrollView>
                <KeyboardAvoidingView>
                    <View>
                        <TitleAbsensiKu />
                    </View>
                    <View style={styles.otpContainer}>
                        <View style={styles.panel}>
                            <View style={styles.contentPanel}>
                                <View style={styles.iconPanel}>
                                    <MaterialCommunityIcons name="email-open-outline" size={40} color="black" />
                                </View>
                                <Text style={styles.verifText}>Verification</Text>
                                <Text style={styles.instructionText}>Enter the verification code we just sent to your email.</Text>
                                <View style={styles.otpInputContainer}>
                                    {otp.map((value, index) => (
                                        <TextInput
                                            key={index}
                                            style={styles.otpInput}
                                            maxLength={1}
                                            keyboardType="numeric"
                                            value={value}
                                            ref={ref => {
                                                inputRefs.current[index] = ref;
                                            }} // Menyimpan referensi
                                            onChangeText={text => handleInputChange(index, text)}
                                        />
                                    ))}
                                </View>
                                <View style={styles.resendContainer}>
                                    <Text style={styles.resendText}>
                                        If you don't receive code yet!{" "}
                                        <Text style={styles.linkText} onPress={handleResend}>
                                            Resend
                                        </Text>
                                    </Text>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        style={
                                            isActive
                                                ? styles.btnActive
                                                : styles.btnDefault}
                                        onPress={handleVerify}
                                        disabled={!isActive}
                                    >
                                        <Text style={
                                            isActive
                                                ? styles.btnTextActive
                                                : styles.btnText}>
                                            Verify and Proceed
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <TouchableOpacity
                                style={styles.footerContent}
                                onPress={() => {
                                    navigation.popToTop()
                                }}
                            >
                                <View>
                                    <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
                                </View>
                                <View>
                                    <Text style={styles.footerText}>Back to Login </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OtpPasswordScreen;
