import { TouchableWithoutFeedback, SafeAreaView, Text, TouchableOpacity, View, Alert, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/TabNavigator';



const HistoryScreen = () => {

    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>()

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    return (
        <SafeAreaView className='bg-[#c0c0c0] flex-1'>
            <View className='px-[15]'>
                <Text>History Screen</Text>
            </View>
        </SafeAreaView>

    )
}

export default HistoryScreen