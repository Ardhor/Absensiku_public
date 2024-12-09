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
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios"; // Import axios
import Entypo from "@expo/vector-icons/Entypo"; // Import Icon Entypo
import ModalError from "../../assets/CustomAlert/ModalError";
import ModalSuccess from "../../assets/CustomAlert/ModalSuccess";
import Toast from "react-native-toast-message";
import styles from "../styles/LoginStyle";
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";
import BtnGoogle from "../../components/btnGoogle/index";
import FooterBeforeLogin from "../../components/footerBeforeLogin_1/index";
import BtnSubmit_1 from "../../components/btnSubmit_1/index";

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<LoginScreenRouteProp>();
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        if (route.params?.isPasswordReset) {
            setModalTitle("Success");
            setModalMessage("Your password has been reset. Please login with your new password");
            setShowSuccess(true);
        }
    }, [route.params]);

    useEffect(() => {
        if (route.params?.isRegister) {
            setModalTitle("Success");
            setModalMessage("Register Successfully, Please Login with New Account");
            setShowSuccess(true);
        }
    }, [route.params]);

    const handleLogin = async () => {

        if (!input && !password) {
            setModalTitle("Error");
            setModalMessage("Please fill in Username / Email and Password");
            setShowError(true);
            return;
        }
        if (!input) {
            setModalTitle("Error");
            setModalMessage("Please fill in Username / Email");
            setShowError(true);
            return;
        }
        if (!password) {
            setModalTitle("Error");
            setModalMessage("Please fill in and Password");
            setShowError(true);
            return;
        }
        if (input.length < 6 && password.length < 6) {
            setModalTitle("Error");
            setModalMessage("Username / Email & Password must be more than 5 characters");
            setShowError(true);
            return;
        }
        if (input.length < 6) {
            setModalTitle("Error");
            setModalMessage("Username / Email must be more than 5 characters");
            setShowError(true);
            return;
        }
        if (password.length < 6) {
            setModalTitle("Error");
            setModalMessage("Password must be more than 5 characters");
            setShowError(true);
            return;
        }


        try {
            const response = await axios.post("http://192.168.1.2:3000/login", {
                identifier: input, // Kirim identifier
                password,
            });

            if (response.status === 200) {
                Toast.show({
                    type: 'success',
                    text1: 'Welcome'
                })
                navigation.reset({
                    index: 0, // Menentukan layar pertama dalam stack
                    routes: [{ name: "Home", params: { isLogin: true } }] // Menentukan route yang baru
                });
            }

        } catch (error) {
            setModalTitle("Failed to login");
            setModalMessage("Please check your username and password");
            setShowError(true);

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

                    <View style={styles.vwTextLogin}>
                        <Text style={styles.textLoginYellow}>Login</Text>
                    </View>

                    <View style={styles.vwInputAccount}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[styles.inputAccount]}
                                placeholder="Username / Email"
                                placeholderTextColor="grey"
                                value={input} // Pastikan untuk menghubungkan value dengan state
                                onChangeText={(text) => {
                                    // Memastikan huruf pertama adalah huruf dan bukan angka
                                    if (/^[a-zA-Z]/.test(text) || text.length === 0) {
                                        setInput(text); // Set input jika valid
                                    } else {
                                        setModalTitle("Error");
                                        setModalMessage("The first character must be a letter");
                                        setShowError(true);
                                        setInput(''); // Bersihkan teks input setelah menampilkan error
                                    }
                                }}
                                autoCapitalize="none"
                                maxLength={25}
                            />


                        </View>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordAccount}
                                placeholder="Password"
                                placeholderTextColor="grey"
                                secureTextEntry={!showPassword}
                                onChangeText={(text) => {
                                    setPassword(text);
                                }}
                                autoCapitalize="none"
                                maxLength={25}
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword((prev) => !prev)}
                                style={styles.iconContainer}
                            >
                                <Entypo
                                    name={showPassword ? "eye" : "eye-with-line"}
                                    size={30}
                                    color="grey"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.vwForgotPwd}>
                        <Text
                            style={styles.txForgotPwd}
                            onPress={() => {
                                navigation.navigate("Forgot");
                            }}
                        >
                            Forgot Password ?
                        </Text>
                    </View>

                    <View>
                        <BtnSubmit_1
                            text={"Login"}
                            onPress={handleLogin}
                            isActive={input.length >= 6 && password.length >= 6}
                            disabled={input.length < 6 || password.length < 6}
                        />
                    </View>

                    <View style={styles.orContainer}>
                        <View style={styles.orLine} />
                        <Text style={styles.orText}>Or Continue With</Text>
                        <View style={styles.orLine} />
                    </View>

                    <View>
                        <BtnGoogle
                            onPress={() => {
                                Alert.alert("GUGEL DIPICIK");
                            }}
                        />
                    </View>
                    <View>
                        <FooterBeforeLogin
                            text={"Don't have an account? "}
                            textNavigation={"Sign Up"}
                            onPress={() => navigation.navigate("Register")}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;