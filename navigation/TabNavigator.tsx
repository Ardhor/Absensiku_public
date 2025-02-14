import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import React, { useRef } from "react";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screens/HomeScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import ScanScreen from "../src/screens/ScanScreen";
import HistoryScreen from "../src/screens/HistoryScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/customHeader/homeHeader";

// TabParamList.ts
export type TabParamList = {
    HomeTab: undefined;
    History: undefined;
    Scan: undefined;
    Profile: undefined;
    MoreClass: undefined;
    AddClass: undefined;
    JoinClass: undefined;
};


const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => {
    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();

    const handleGoToProfile = () => {
        navigation.navigate('Profile'); // Navigasi langsung ke tab Profile
    };



    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.container,
                tabBarItemStyle: styles.tabItem,
                tabBarLabelStyle: styles.labelItem,


            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            size={25}
                            color={focused ? "#FED40E" : "#8999a1"}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.labelItem, { color: focused ? "#FED40E" : "#8a8787" }]}>Home</Text>
                    ),
                    headerShown: true,
                    header: () => <CustomHeader />

                }}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name={focused ? "history" : "history-toggle-off"}
                            size={28}
                            color={focused ? "#FED40E" : "#8999a1"}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.labelItem, { color: focused ? "#FED40E" : "#8a8787" }]}>History</Text>
                    ),


                }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? "qrcode-scan" : "scan-helper"}
                            size={25}
                            color={focused ? "#FED40E" : "#8999a1"}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.labelItem, { color: focused ? "#FED40E" : "#8a8787" }]}>Scan</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                size={25}
                                color={focused ? "#FED40E" : "#8999a1"}
                            />
                        
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.labelItem, { color: focused ? "#FED40E" : "#8a8787" }]}>Profile</Text>
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#557c56",
        position: "absolute",
        borderRadius: 30,
        bottom: 20,
        height: 80,
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    tabItem: {
        marginTop: 10,
    },
    labelItem: {
        fontSize: 14,
        marginTop: 3,
        fontWeight: "500",
    },
})