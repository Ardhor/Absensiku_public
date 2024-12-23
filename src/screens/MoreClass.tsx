import { ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { useNavigation, useRoute } from '@react-navigation/native';
import CardClass from "../../components/cardClass/CardClass"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const MoreClass = () => {

    const [data, setData] = useState<any[]>([]);  // State untuk menyimpan data kelas
    const [loading, setLoading] = useState<boolean>(true);  // State loading

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.1.6:3000/dataclass'); // Gantilah dengan URL yang benar
                const jsonData = await response.json();
                setData(jsonData);  // Update data state dengan data yang diterima
            } catch (error) {
                console.error('Error fetching data:', error);
                setModalTitle("Error");
                setModalMessage("Terjadi kesalahan saat mengambil data.");
                setShowError(true);
            } finally {
                setLoading(false);  // Mengubah loading menjadi false setelah data diterima
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView className='flex-1 justify-center items-center'>
                <ActivityIndicator size="large" color="#000" />
            </SafeAreaView>
        );
    }

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
            <ScrollView showsVerticalScrollIndicator={false}>

                <View className='px-[15] pb-[20]'>

                    <View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => {
                                return (
                                    <CardClass
                                        classname={item.classname}
                                        description={item.description}
                                        admin={item.name}
                                    />
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()} // Gunakan index sebagai key
                            className='mt-[10] rounded-[15]'
                            scrollEnabled={false}
                        />


                    </View>

                </View>


            </ScrollView>
        </View>
    )
}

export default MoreClass