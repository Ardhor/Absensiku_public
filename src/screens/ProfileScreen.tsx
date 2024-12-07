import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProfileScreen = () => {

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    return (
        <SafeAreaView className='flex-1 bg-[#c0c0c0]'>
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
                    <View className='px-[15]'>
                        <Text>Profile Screen</Text>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen