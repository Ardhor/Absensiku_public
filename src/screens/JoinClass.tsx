import { Alert, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';
import ApiManager from '../../components/ApiManager'
import { AuthProvider, useAuth } from '../../components/AuthContext'; // mau digunakan untuk menyimpan username ketika login, tetapi tidak bisa

const JoinClass: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [data, setData] = useState<any[]>([]);  // State untuk menyimpan data kelas

    const [code_class, setCodeClass] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    // const {username} = useAuth(); // mengambil user_id dari context
    // console.log("username in join class: ", username) // debugging username yang tersimpan
    
    const [loading, setLoading] = useState<boolean>(false);  // State loading
    const codeClassInputRef = useRef<TextInput>(null); 

    const handleJoinClass = async () => {
        if (!code_class.trim){
            Alert.alert('Validation error', 'Class code is required.');
            return;
        }

        setLoading(true);

        if (!username){
            Alert.alert("Error", 'Unable to find username. Please log in again.')
            return
        }

        try {
            const response = await ApiManager.post('/join-class', {
                code_class,
                username, // kirim username ke backend
            });
            navigation.navigate({name: 'Home', params: {isLogin : true}})
            Alert.alert('Success', response.data.message);
        } catch (error: any) {
            Alert.alert('error', error.response?.data?.message || 'Failed to join the class.')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        // Fokus pada codeClass TextInput saat halaman pertama kali dibuka
        const timeoutId = setTimeout(() => {
            codeClassInputRef.current?.focus();
        }, 500); // Memberi waktu render

        // Membersihkan timeout saat komponen unmount
        return () => clearTimeout(timeoutId);
    }, []);

    // Fungsi untuk menangani perubahan pada input codeClass
    const handleCodeClassChange = (text: string) => {
        setCodeClass(text);
    };

    // Fungsi untuk menghapus text input
    const clearCodeClass = () => {
        setCodeClass('');
    };
    const clearUsername = () => {
        setUsername('');
    };

    // Logika untuk mengecek apakah tombol "Create" bisa diaktifkan
    const isCreateButtonDisabled = !(code_class) || !(username);

    return (
        <View className='flex-1 bg-[#c0c0c0]'>
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
                    <View className='py-[15]'>

                        <View className='bg-[#36474f] w-[100%] h-[300%] mt-[35] self-center justify-start p-[15] rounded-[5]'>
                            {/* Untuk inputan Username */}
                            <View className='bg-[#ffffff] w-[100%] h-[60] rounded-[10] justify-center pl-[20] my-[15]'>
                                <TextInput
                                    style={{ fontSize: 20, color: '#000000', width: "85%", }}
                                    placeholder='Enter Username'
                                    placeholderTextColor="grey"
                                    value={username}
                                    onChangeText={setUsername}
                                />
                                {username.length > 0 && (
                                    <TouchableOpacity
                                        className='absolute right-[3%] justify-center content-center'
                                        onPress={clearUsername}
                                    >
                                        <Ionicons name="close" size={35} color="black" />
                                    </TouchableOpacity>
                                )}
                            </View>
                            {/* Untuk inputan code class */}
                            <View className='bg-[#ffffff] w-[100%] h-[60] rounded-[10] justify-center pl-[20] my-[15]'>
                                <TextInput
                                    style={{ fontSize: 20, color: '#000000', width: "85%", }}
                                    placeholder='Enter Code Class'
                                    placeholderTextColor="grey"
                                    value={code_class}
                                    onChangeText={setCodeClass}
                                />
                                {code_class.length > 0 && (
                                    <TouchableOpacity
                                        className='absolute right-[3%] justify-center content-center'
                                        onPress={clearCodeClass}
                                    >
                                        <Ionicons name="close" size={35} color="black" />
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View className='items-center content-center mt-[30]'>
                                <TouchableOpacity
                                    onPress={handleJoinClass}
                                    className={` w-[70%] h-[50] rounded-[10] justify-center items-center ${isCreateButtonDisabled ? 'bg-gray-400' : 'bg-white'}`}
                                    disabled={isCreateButtonDisabled}
                                >
                                    <Text className={`text-center text-xl font-[600] ${isCreateButtonDisabled ? 'text-gray-600' : 'text-black'}`}>
                                        Join
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </View >
    )
}

export default JoinClass