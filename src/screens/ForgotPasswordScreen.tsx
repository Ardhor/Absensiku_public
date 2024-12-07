import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Alert,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacing from "../../constants/Spacing";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import axios from "axios";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Toast from "react-native-toast-message";
import ModalError from "../../assets/CustomAlert/ModalError";
import ModalSuccess from "../../assets/CustomAlert/ModalSuccess";
import styles from "../styles/ForgotPasswordStyle";
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";
import BtnSubmit_1 from "../../components/btnSubmit_1/index";

const ForgotPasswordScreen = () => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>(); //
    const [input, setInput] = useState("");
    console.log("input: ", input);

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const handleInput = async () => {
        if (!input) {
            setModalTitle("Error");
            setModalMessage("Please enter a valid username or email");
            setShowError(true);

        } else if (input.length <= 5) {
            setModalTitle("Error");
            setModalMessage("Username / Email must be more than 5 characters");
            setShowError(true);

        } else {
            setModalTitle("Success");
            setModalMessage("Check your email for OTP Code");
            setShowSuccess(true);
            navigation.push("Otp");
        }
    };

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
                    <View style={styles.vwTextForgot}>
                        <Text style={styles.textForgotYellow}>Forgot Password?</Text>
                    </View>

                    <View style={styles.vwInputAccount}>
                        <TextInput
                            style={[styles.inputAccount, { marginTop: 15, marginBottom: 15 }]}
                            placeholder="Username / Email"
                            placeholderTextColor="grey"
                            onChangeText={text => setInput(text)}
                            autoCapitalize="none"
                        />

                    </View>

                    <View>
                        <BtnSubmit_1
                            text={"Next"}
                            onPress={handleInput}
                            isActive={input.length >= 6}
                            disabled={input.length < 6}
                        />
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

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView >
    );
};

export default ForgotPasswordScreen;
