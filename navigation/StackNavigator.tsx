import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import HomeScreen from "../src/screens/HomeScreen";
import SplashScreen from "../src/screens/SplashScreen"
import ForgotPasswordScreen from "../src/screens/ForgotPasswordScreen"
import OtpPasswordScreen from "../src/screens/OtpPasswordScreen"
import ChangePasswordScreen from "../src/screens/ChangePasswordScreen";
import TabNavigator from "./TabNavigator"; 

export type RootStackParamList = {
    Welcome: undefined;
    Login: { isPasswordReset?: boolean, isRegister?: boolean };
    Register: undefined;
    Home: { isLogin?: boolean };
    Splash: undefined;
    Forgot: undefined;
    Otp: undefined;
    Change: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
                <Stack.Screen name="Otp" component={OtpPasswordScreen} />
                <Stack.Screen name="Change" component={ChangePasswordScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};




export default StackNavigator;

const styles = StyleSheet.create({});
