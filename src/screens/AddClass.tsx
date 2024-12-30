import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from '../../components/AuthContext';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';

const AddClass = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const [className, setClassName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const {user_id} = useAuth()
    const [generateCode, setGenerateCode] = useState<string | null>(null)
    console.log("user_id in add class:", user_id)

    const classNameInputRef = useRef<TextInput>(null);

    const handleAddClass = async () => {
        if (!user_id) {
            Alert.alert("error", "Anda harus loggen in to add a class.");
            return
        }
        try {
            const response = await axios.post("http://192.168.1.6:3000/add-class", {
                user_id,
                classname : className,
                description,
            })
            setGenerateCode(response.data.code_class)
            Alert.alert("Success", 'Class berhasil dibuat! Code: ')
            navigation.navigate({name: "Home", params: {isLogin: true}})
        } catch (error) {
            Alert.alert("Error", "Gagal membuat kelas baru")
            console.log(error)
        }
    }
    useEffect(() => {
        // Fokus pada className TextInput saat halaman pertama kali dibuka
        const timeoutId = setTimeout(() => {
            classNameInputRef.current?.focus();
        }, 500); // Memberi waktu render

        // Membersihkan timeout saat komponen unmount
        return () => clearTimeout(timeoutId);
    }, []);

    // Fungsi untuk menangani perubahan pada input className
    const handleClassNameChange = (text: string) => {
        setClassName(text);
    };

    // Fungsi untuk menangani perubahan pada input description
    const handleDescriptionChange = (text: string) => {
        setDescription(text);
    };

    // Fungsi untuk menghapus text input
    const clearClassName = () => {
        setClassName('');
    };

    const clearDescription = () => {
        setDescription('');
    };

    // Logika untuk mengecek apakah tombol "Create" bisa diaktifkan
    const isCreateButtonDisabled = !(className && description);

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

            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView>
                    <View className='py-[15]'>

                        <View className='bg-[#36474f] w-[100%] h-[300%] mt-[35] self-center justify-start p-[15] rounded-[5]'>
                            <View className='bg-[#ffffff] w-[100%] h-[60] rounded-[10] justify-center pl-[20] my-[15]'>
                                <TextInput
                                    ref={classNameInputRef}
                                    style={{ fontSize: 20, color: '#000000', width: "85%", }}
                                    placeholder='Class Name'
                                    placeholderTextColor="grey"
                                    value={className}
                                    onChangeText={handleClassNameChange}

                                />
                                {className.length > 0 && (
                                    <TouchableOpacity
                                        className='absolute right-[3%] justify-center content-center'
                                        onPress={clearClassName}
                                    >
                                        <Ionicons name="close" size={35} color="black" />
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View className='bg-[#ffffff] w-[100%] h-[60] rounded-[10] justify-center pl-[20]'>
                                <TextInput
                                    style={{ fontSize: 20, color: '#000000', width: "85%", }}
                                    placeholder='Description'
                                    placeholderTextColor="grey"
                                    value={description}
                                    onChangeText={handleDescriptionChange}
                                />
                                {description.length > 0 && (
                                    <TouchableOpacity
                                        className='absolute right-[3%] justify-center content-center'
                                        onPress={clearDescription}
                                    >
                                        <Ionicons name="close" size={35} color="black" />
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View className='items-center content-center mt-[30]'>
                                <TouchableOpacity
                                    className={` w-[70%] h-[50] rounded-[10] justify-center items-center ${isCreateButtonDisabled ? 'bg-gray-400' : 'bg-white'}`}
                                    disabled={isCreateButtonDisabled}
                                    onPress={handleAddClass}
                                >
                                    <Text className={`text-center text-xl font-[600] ${isCreateButtonDisabled ? 'text-gray-600' : 'text-black'}`}>
                                        Create
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {generateCode && (
                                <View> 
                                    <Text> Class Code: {generateCode}</Text>
                                </View>
                            )}
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View >
    )
}

export default AddClass