import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

type CardClass2Props = {
    class_name: string;
    description: string;
    admin: string;
}

const CardClass2: React.FC<CardClass2Props> = ({ class_name, description, admin }: any) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Alert.alert("CARD DIPICIK")}
            >
                <View
                    className='mt-[10] w-[100%] bg-[#009688] px-[25] py-[15] justify-start items-start rounded-[15]'
                >
                    <Text
                        className='text-[16px] text-[#ffffff] font-[800]'
                    >{class_name}</Text>
                    <Text
                        className='text-[15px] text-[#ffffff] font-[600] mt-[10]'
                    >{description}</Text>
                    <Text
                        className='text-[14px] text-[#ffffff] font-[400] mt-[30]'
                    >{admin}</Text>
                    <TouchableWithoutFeedback
                        onPress={() => Alert.alert("OPTION DIPICIK")}
                    >
                        <SimpleLineIcons name="options" size={20} color={"#fff"}
                            className='self-end absolute right-[20] top-[12] '
                        />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardClass2

const styles = StyleSheet.create({

})