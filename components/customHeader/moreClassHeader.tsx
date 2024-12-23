import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/TabNavigator';

const moreClassHeader = () => {

    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>()

    return (
        <SafeAreaView style={styles.bg}>
            <View style={styles.container}>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.goBack()}
                    
                >
                    <AntDesign name="arrowleft" size={30} color="white" />
                </TouchableOpacity>

                <Text
                    style={styles.title}
                >
                    More Class
                </Text>


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

export default moreClassHeader

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#557c56',
    },
    container: {
        paddingHorizontal: 15,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#7F8487",
        borderBottomWidth: 1,
    },
    title: {
        color: "#fed40e",
        fontSize: 25,
        fontWeight: "600",

    },
})