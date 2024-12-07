import { ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalError from '../../assets/CustomAlert/ModalError';
import ModalSuccess from '../../assets/CustomAlert/ModalSuccess';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import CardClass1 from "../../components/cardClass/CardClass1"
import CardClass2 from "../../components/cardClass/CardClass2"
import CardClass3 from "../../components/cardClass/CardClass3"
import CardClass4 from "../../components/cardClass/CardClass4"
import CardClass5 from "../../components/cardClass/CardClass5"
import Toast from "react-native-toast-message"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/TabNavigator';


type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
const HomeScreen = () => {

    const [data, setData] = useState<any[]>([]);  // State untuk menyimpan data kelas
    const [loading, setLoading] = useState<boolean>(true);  // State loading

    const route = useRoute<HomeScreenRouteProp>();
    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>()

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    // Fungsi untuk mengambil data dari API
    useEffect(() => {
        // Ambil data dari API atau sumber lainnya
        const fetchData = async () => {
            try {
                const response = await fetch('http://172.20.10.2:3000/dataClass');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getRandomCardComponent = () => {
        const cardComponents = [CardClass1, CardClass2, CardClass3, CardClass4, CardClass5];
        const randomIndex = Math.floor(Math.random() * cardComponents.length);
        return cardComponents[randomIndex];
    };

    useEffect(() => {
        // Simulasi waktu loading selama 3 detik
        const timer = setTimeout(() => {
            setLoading(false);
        });

        // Clean up timer ketika komponen di-unmount
        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return (
            <SafeAreaView className='flex-1 justify-center items-center'>
                <ActivityIndicator size="large" color="#000" />
            </SafeAreaView>
        );
    }

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='px-[15] pb-[100]' >


                    <View
                        className='mt-[80] bg-[#fff] w-[80%] rounded-[15] justify-center self-center px-[15] py-[25] shadow'
                    >
                        <FontAwesome
                            name="graduation-cap" size={70} color={"#3c583c"} className='absolute left-[185] bottom-[130]' />
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

                    <View>
                        {/* Card, Color :
                    566e79
                    33ac70
                    317ae1
                    36474f
                    009688
                    */}

                        {/* <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => Alert.alert("CARD DIPICIK")}
                    >
                        <View
                            className='mt-[10] w-[100%] bg-[#36474f] px-[25] py-[15] justify-start items-start rounded-[15]'
                        >
                            <Text
                                className='text-[16px] text-[#ffffff] font-[800]'
                            >Class</Text>
                            <Text
                                className='text-[15px] text-[#ffffff] font-[600] mt-[10]'
                            >Desc</Text>
                            <Text
                                className='text-[14px] text-[#ffffff] font-[400] mt-[30]'
                            >Admin
                            </Text>

                            <TouchableWithoutFeedback
                                onPress={() => Alert.alert("OPTION DIPICIK")}
                            >
                                <SimpleLineIcons name="options" size={20} color={"#fff"}
                                    className='self-end absolute right-[20] top-[12]'
                                />
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity> */}
                    </View>

                    <View className='flex-row mt-[20] flex-1 justify-between items-center mx-[10] shadow'>
                        <TouchableOpacity
                            className='bg-[#00be00] px-[30] py-[15] rounded-[15]'
                            onPress={() => Alert.alert("Add Class")}
                        >
                            <Text
                                className='text-[#fff] text-[16px] font-[700]'
                            >Add Class</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className='bg-[#00be00] px-[30] py-[15] rounded-[15]'
                            onPress={() => Alert.alert("More Class")}
                        >
                            <Text
                                className='text-[#fff] text-[16px] font-[700]'
                            >More Class</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={data.slice(0,5)}
                            renderItem={({ item }) => {
                                const CardComponent = getRandomCardComponent();
                                return (
                                    <CardComponent
                                        class_name={item.class_name}
                                        description={item.description}
                                        admin={item.admin}
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
        </SafeAreaView >
    )
}

export default HomeScreen

