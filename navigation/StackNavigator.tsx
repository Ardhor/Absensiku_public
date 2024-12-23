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
import MoreClass from "../src/screens/MoreClass";
import AddClass from "../src/screens/AddClass";
import JoinClass from "../src/screens/JoinClass";
import MoreClassHeader from "../components/customHeader/moreClassHeader";
import AddClassHeader from "../components/customHeader/addClassHeader";
import JoinClassHeader from "../components/customHeader/joinClassHeader";
import { AuthProvider } from "../components/AuthContext";

export type RootStackParamList = {
    Welcome: undefined;
    Login: { isPasswordReset?: boolean, isRegister?: boolean };
    Register: undefined;
    Home: { isLogin?: boolean };
    Splash: undefined;
    Forgot: undefined;
    Otp: undefined;
    Change: undefined;
    MoreClass: undefined;
    AddClass: undefined;
    JoinClass: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <AuthProvider> 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
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
                <Stack.Screen name="AddClass" component={AddClass} options={{ headerShown: true, header: () => <AddClassHeader /> }}  />
                <Stack.Screen name="MoreClass" component={MoreClass} options={{ headerShown: true, header: () => <MoreClassHeader /> }} />
                <Stack.Screen name="JoinClass" component={JoinClass} options={{ headerShown: true, header: () => <JoinClassHeader /> }} />


            </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>
    );
};




export default StackNavigator;

const styles = StyleSheet.create({});
