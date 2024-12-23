import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

// Daftar warna yang digunakan
const colors = ['#36474f', '#3582f2', '#009688', '#0276bd', '#33ac70'];

// Fungsi untuk mendapatkan warna berdasarkan nama kelas
// const getClassColor = (className: string) => {
//     let hash = 0;
//     for (let i = 0; i < className.length; i++) {
//         hash = className.charCodeAt(i) + ((hash << 4) - hash); // Shift hash
//     }

//     // Memilih warna berdasarkan hash dan jumlah warna yang tersedia
//     const colorIndex = Math.abs(hash) % colors.length;
//     return colors[colorIndex];
// }

type CardClassProps = {
    classname: string;
    description: string;
    admin: string;
}

const CardClass: React.FC<CardClassProps> = ({ classname, description, admin }) => {
    // const backgroundColor = getClassColor(class_name);

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Alert.alert("CARD DIPICIK")}
            >
                <View
                    style={{
                        marginTop: 10,
                        width: "100%",
                        backgroundColor: "#557c56",
                        paddingHorizontal: 25,
                        paddingVertical: 15,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        borderRadius: 15
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: "#fff",
                            fontWeight: 800
                        }}
                    >{classname}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#E0E0E0",
                            fontWeight: 600,
                            marginTop: 10
                        }}

                    >{description}</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#fed40e",
                            fontWeight: 400,
                            marginTop: 30,
                        }}

                    >{admin}
                    </Text>

                    <TouchableWithoutFeedback
                        onPress={() => Alert.alert("OPTION DIPICIK")}
                    >
                        <SimpleLineIcons name="options" size={20} color={"#fff"}
                            style={{
                                alignSelf: "flex-end",
                                position: "absolute",
                                right: 20,
                                top: 12
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardClass

const styles = StyleSheet.create({})