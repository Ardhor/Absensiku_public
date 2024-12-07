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
import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacing from "../../constants/Spacing";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios"; // Import axios
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ModalError from "../../assets/CustomAlert/ModalError";
import ModalSuccess from "../../assets/CustomAlert/ModalSuccess";
import Toast from "react-native-toast-message";
import styles from "../styles/ChangePasswordStyle";
import TitleAbsensiKu from "../../components/headerAbsensiKu/index";

const ChangePasswordScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async () => {
        if (!newPassword || !confirmPassword) {
            setModalTitle("Error")
            setModalMessage("Please fill in all fields");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!newPassword) {
            setModalTitle("Error")
            setModalMessage("Please enter New Password");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (!confirmPassword) {
            setModalTitle("Error")
            setModalMessage("Please enter Confirm Password");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (newPassword.length <= 5 || confirmPassword.length <= 5) {
            setModalTitle("Error")
            setModalMessage("Password must be at least 6 characters");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (newPassword !== confirmPassword) {
            setModalTitle("Error")
            setModalMessage("Password does not match");  // Set pesan alert
            setShowError(true); // Menampilkan alert
            return;
        }

        if (newPassword === confirmPassword) {
            navigation.popToTop();
            navigation.navigate("Login", { isPasswordReset: true });
            return;
        }

    }


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
                    <View style={styles.Container}>
                        <View style={styles.panel}>
                            <View style={styles.contentPanel}>
                                <View style={styles.iconPanel}>
                                    <MaterialIcons name="password" size={40} color="black" />
                                </View>
                                <Text style={styles.titleContent}>Create New Password</Text>
                                <Text style={styles.messageContent}>This Password should be different from the previous password.</Text>
                                <View style={styles.PasswordContainer}>
                                    <View style={styles.inputPasswordContainer}>
                                        <TextInput
                                            style={styles.Password}
                                            placeholder="New Password"
                                            placeholderTextColor={"grey"}
                                            secureTextEntry={!showNewPassword}
                                            onChangeText={text => setNewPassword(text)}
                                            autoCapitalize="none"
                                            maxLength={25}
                                        />
                                        <TouchableOpacity onPress={() => setShowNewPassword(prev => !prev)} style={styles.iconEye}>
                                            <Entypo name={showNewPassword ? "eye" : "eye-with-line"} size={30} color="grey" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.inputPasswordContainer}>
                                        <TextInput
                                            style={styles.Password}
                                            placeholder="Confirm Password"
                                            placeholderTextColor={"grey"}
                                            secureTextEntry={!showConfirmPassword}
                                            onChangeText={text => setConfirmPassword(text)}
                                            autoCapitalize="none"
                                            maxLength={25}
                                        />
                                        <TouchableOpacity onPress={() => setShowConfirmPassword(prev => !prev)} style={styles.iconEye}>
                                            <Entypo name={showConfirmPassword ? "eye" : "eye-with-line"} size={30} color="grey" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.checkContainer}>
                                    <FontAwesome name="check-circle" size={26} style={{ color: newPassword.length > 5 ? "green" : "white" }} />
                                    <Text style={(newPassword.length > 5) ? styles.checkTextActive : styles.checkTextDefault}>At least 6 characters</Text>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        style={(newPassword.length > 5 && confirmPassword.length > 5) ? styles.btnActive : styles.btnDefault}
                                        onPress={handleSubmit}
                                    >
                                        <Text
                                            style={(newPassword.length > 5 && confirmPassword.length > 5) ? styles.btnTextActive : styles.btnText}
                                        >Reset Password</Text>
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

export default ChangePasswordScreen;