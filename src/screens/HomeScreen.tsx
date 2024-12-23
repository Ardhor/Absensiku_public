import { ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CardClass from "../../components/cardClass/CardClass"
import Toast from "react-native-toast-message"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/TabNavigator';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";


type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {

    const actionSheetRef = useRef<ActionSheetRef>(null);

    const [data, setData] = useState<any[]>([]);  // State untuk menyimpan data kelas
    const [loading, setLoading] = useState<boolean>(true);  // State loading

    const route = useRoute<HomeScreenRouteProp>();
    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>()

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
                <View className='px-[15] pb-[100]' >

                    <View
                        className='mt-[55] bg-[#fff] w-[80%] rounded-[15] justify-center self-center px-[15] py-[25] shadow'
                    >
                        <FontAwesome
                            name="graduation-cap" size={70} color={"#3c583c"} className='absolute left-[205] bottom-[105]' />
                        <Text
                            className='text-[16px] text-[#000] font-[400]'
                        >Halo,</Text>
                        <Text
                            className='text-[18px] text-[#000] font-[700]'
                        >Kurt Cobain</Text>
                        <Text
                            className='text-[16px] text-[#000] font-[400] mt-[25]'
                        >Don't Miss Your Attendance Today!</Text>
                    </View>


                    <View className='flex-row mt-[20] flex-1 justify-between items-center mx-[10] shadow'>
                        <TouchableOpacity
                            className='bg-[#00be00] px-[30] py-[15] rounded-[15]'
                            onPress={() => {
                                actionSheetRef.current?.show();

                            }}
                        >
                            <Text
                                className='text-[#fff] text-[16px] font-[700]'
                            >Add Class</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className='bg-[#00be00] px-[30] py-[15] rounded-[15]'
                            onPress={() => navigation.navigate("MoreClass")}
                        >
                            <Text
                                className='text-[#fff] text-[16px] font-[700]'
                            >More Class</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={data.slice(0, 2)}
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
                            style={{ marginTop: 10, borderRadius: 15 }}
                            scrollEnabled={false}
                        />
                    </View>


                    <View>
                        <ActionSheet
                            ref={actionSheetRef}
                            containerStyle={{
                                height: 165, backgroundColor: "#c7c7c7", width: "100%",
                            }}
                        >
                            <View className='p-[10] flex-column mt-[10]'>

                                <TouchableOpacity className='mt-[5] mb-[15] bg-[#31363F] px-[15] py-[10] rounded-[10] w-[70%] items-center self-center justify-center'
                                    onPress={() => {
                                        actionSheetRef.current?.hide();  // Menutup ActionSheet
                                        navigation.navigate("AddClass"); // Navigasi ke AddClass
                                    }}
                                >
                                    <Text className='text-[#fff] text-[18px] text-center ' >Create Class</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='mb-[10] bg-[#31363F] px-[15] py-[10] rounded-[10] w-[70%] items-center self-center justify-center'
                                    onPress={() => {
                                        actionSheetRef.current?.hide();  // Menutup ActionSheet
                                        navigation.navigate("JoinClass"); // Navigasi ke AddClass
                                    }}
                                >
                                    <Text className='text-[#fff] text-[18px] text-center ' >Join Class</Text>
                                </TouchableOpacity>

                            </View>
                        </ActionSheet>
                    </View>

                </View>

            </ScrollView>
        </View >
    )
}

export default HomeScreen

