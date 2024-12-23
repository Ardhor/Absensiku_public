import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/TabNavigator';

const moreHeader = () => {

    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>()

    return (
        <SafeAreaView style={styles.bg}>
                <View style={styles.container}>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => Alert.alert("Aduh")}

                    >
                        <Entypo name="menu" size={35} color="white" />
                    </TouchableOpacity>

                    <Text
                        style={styles.title}
                    >
                        AbsensiKu
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("Profile")}

                        style={styles.avatarContainer}
                    >
                        <Image source={require("../../assets/images/user-avatar.png")}
                            style={styles.avatar} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => Alert.alert("Aduh")}

                    >
                        <SimpleLineIcons name="options" size={30} color="white" />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

export default moreHeader

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#557c56'
    },
    container: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        borderBottomColor: "#7F8487",
        borderBottomWidth: 1,
    },
    title: {
        color: "#fed40e",
        fontStyle: "italic",
        fontSize: 28,
        fontWeight: "700",
        right: 30
    },
    avatarContainer: {
        left: 20
    },
    avatar: {
        width: 50,
        height: 50,
    }
})