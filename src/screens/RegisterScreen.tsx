import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Alert,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from 'axios'; // Impor axios untuk membuat permintaan HTTP
import Entypo from '@expo/vector-icons/Entypo'; // Import Icon Entypo
import ModalError from "../../assets/CustomAlert/ModalError";
import ModalSuccess from "../../assets/CustomAlert/ModalSuccess";
import styles from "../styles/RegisterStyle";
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";
import BtnGoogle from "../../components/btnGoogle/index";
import FooterBeforeLogin from "../../components/footerBeforeLogin_1/index";
import BtnSubmit_1 from "../../components/btnSubmit_1/index";

const RegisterScreen = () => { // Ganti nama menjadi RegisterScreen

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [name, setName] = useState("");
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const validateEmail = (email: string): boolean => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };


    const handleSignUp = async () => {
        if (!name && !input && !password && !email) {
            setModalTitle("Error");
            setModalMessage("Please fill in all fields");
            setShowError(true);
            return;
        }

        if (!name && !input && !password) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name, Username, and Password");
            setShowError(true);
            return;
        }

        if (!name && !input && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name, Username, and Email");
            setShowError(true);
            return;
        }

        if (!name && !password && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name, Password, and Email");
            setShowError(true);
            return;
        }

        if (!input && !password && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Username, Password, and Email");
            setShowError(true);
            return;
        }

        if (!name && !input) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name and Username");
            setShowError(true);
            return;
        }

        if (!name && !password) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name and Password");
            setShowError(true);
            return;
        }

        if (!name && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Full Name and Email");
            setShowError(true);
            return;
        }

        if (!input && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Username and Email");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!password && !email) {
            setModalTitle("Error");
            setModalMessage("Please enter Password and Email");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!input && !password) {
            setModalTitle("Error");
            setModalMessage("Please enter Username and Password");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!input) {
            setModalTitle("Error");
            setModalMessage("Please enter Username");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!password) {
            setModalTitle("Error");
            setModalMessage("Please enter Password");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!email) {
            setModalTitle("Error");
            setModalMessage("Please enter Email");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        // Validasi panjang karakter
        if (input.length <= 5 && password.length <= 5 && !validateEmail(email)) {
            setModalTitle("Error");
            setModalMessage("Username & Password must be over 5 characters.\nEnter a valid email.\nEx: example@example.com");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (password.length <= 5 && !validateEmail(email)) {
            setModalTitle("Error");
            setModalMessage("Password must be over 5 characters.\nAnd\nEnter a valid email.\nEx: example@example.com");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (input.length <= 5 && !validateEmail(email)) {
            setModalTitle("Error");
            setModalMessage("Username must be over 5 characters.\nAnd\nEnter a valid email.\nEx: example@example.com");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (input.length <= 5 && password.length <= 5) {
            setModalTitle("Error");
            setModalMessage("Username & Password must be over 5 characters");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (input.length <= 5) {
            setModalTitle("Error");
            setModalMessage("Username must be more than 5 characters");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (password.length <= 5) {
            setModalTitle("Error");
            setModalMessage("Password must be more than 5 characters");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!validateEmail(email)) {
            setModalTitle("Error");
            setModalMessage("Please enter a valid Email address.\n ex: example@example.com");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!name || name.trim() === "") {
            setModalTitle("Error");
            setModalMessage("Please enter your Name");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (password.length <= 5) {
            setModalTitle("Error");
            setModalMessage("Password must be more than 5 characters");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }



        try {
            const response = await axios.post('http://192.168.1.2:3000/register', {
                name,
                username: input,
                password,
                email,
            });

            if (response.status === 201) {
                navigation.popToTop();
                navigation.navigate("Login", { isRegister: true });
                return;

            }
        } catch (error) {
            console.error(error);
            // Memeriksa apakah ini adalah error dari Axios
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // Menangani kode status tertentu dari server
                    if (error.response.status === 409) {
                        setModalTitle("Error");
                        setModalMessage(error.response.data.message);  // Set pesan alert
                        setShowError(true); // Menampilkan alert
                    } else {
                        setModalTitle("Error");
                        setModalMessage("Failed to register. Please try again.");  // Set pesan alert
                        setShowError(true); // Menampilkan alert
                    }
                } else {
                    setModalTitle("Error");
                    setModalMessage("Network error or server not responding");  // Set pesan alert
                    setShowError(true); // Menampilkan alert
                }
            } else {
                setModalTitle("Error");
                setModalMessage("An unexpected error occurred");  // Set pesan alert
                setShowError(true); // Menampilkan alert
            }
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
                        <Text style={styles.textLoginYellow}>Sign Up</Text>
                    </View>

                    <View style={styles.vwInputAccount}>
                        <View style={styles.nameContainer}>
                            <TextInput
                                style={styles.nameAccount}
                                placeholder="Full Name"
                                placeholderTextColor="grey"
                                value={name}
                                onChangeText={(text) => {
                                    // Memastikan huruf pertama adalah huruf dan bukan angka
                                    if (/^[a-zA-Z]/.test(text) || text.length === 0) {
                                        setName(text); // Set Name jika valid
                                    } else {
                                        setModalTitle("Error");
                                        setModalMessage("The first character must be a letter");  // Set pesan alert
                                        setShowError(true); // Menampilkan alert
                                        setName(''); // Bersihkan teks Name setelah menampilkan error
                                    }
                                }}
                                autoCapitalize="none"
                                maxLength={50}
                            />
                        </View>

                        <View style={styles.usernameContainer}>
                            <TextInput
                                style={[styles.inputAccount]}
                                placeholder="Username"
                                placeholderTextColor="grey"
                                value={input} // Pastikan untuk menghubungkan value dengan state
                                onChangeText={(text) => {
                                    // Menghapus spasi dari input
                                    const noSpaces = text.replace(/\s/g, '');
                                    // Validasi: cek jika input mengandung spasi
                                    if (text !== noSpaces) {
                                        setModalTitle("Error");
                                        setModalMessage("Username cannot contain spaces."); // Pesan error jika ada spasi
                                        setShowError(true); // Menampilkan modal
                                    } else if (/^[a-zA-Z]/.test(noSpaces) || noSpaces.length === 0) {
                                        setInput(noSpaces); // Set input jika valid (tidak ada spasi dan huruf pertama valid)
                                    } else {
                                        setModalTitle("Error");
                                        setModalMessage("The first character must be a letter.");  // Set pesan error
                                        setShowError(true); // Menampilkan modal
                                        setInput(''); // Mengosongkan input
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
                                onChangeText={text => setPassword(text)}
                                autoCapitalize="none"
                                maxLength={25}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.iconContainer}>
                                <Entypo name={showPassword ? "eye" : "eye-with-line"} size={30} color="grey" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.emailContainer}>
                            <TextInput
                                style={[styles.emailAccount]}
                                placeholder="Email"
                                placeholderTextColor="grey"
                                value={email}
                                onChangeText={text => {
                                    // Memastikan huruf pertama adalah huruf
                                    if (/^[a-zA-Z]/.test(text) || text === "") {
                                        setEmail(text); // Set email jika valid
                                    } else {
                                        setModalTitle("Error");
                                        setModalMessage("The first character must be a letter");  // Set pesan alert
                                        setShowError(true); // Menampilkan alert
                                        setEmail(''); // Bersihkan teks input setelah menampilkan error
                                    }
                                }}
                                autoCapitalize="none"
                                maxLength={25}
                            />

                        </View>
                    </View>

                    <View>
                        <BtnSubmit_1
                            text={"Sign Up"}
                            onPress={handleSignUp}
                            isActive={name.length >= 5 && input.length >= 5 && password.length >= 5 && email.length >= 5}
                            disabled={name.length <= 5 || input.length <= 5 || password.length <= 5 || email.length <= 5}
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
                            text={"Already have an account? "}
                            textNavigation={"Login"}
                            onPress={() => navigation.popToTop()}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;