import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

type CardClassProps = {
    classname: string;
    description: string;
    name: string;
}

const CardClass: React.FC<CardClassProps> = ({ classname, description, name }: any) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Alert.alert("CARD DIPICIK")}
            >
                <View style={styles.panel}
                    className='mt-10 w-100% bg-zinc-800 px-25 py-15 justify-start items-start rounded-15'
                > 
                    <View style={{  // View classname
                        paddingRight: 50
                    }}>   
                        <Text
                            style={{ color:'#40dff4' }}
                            className='text-[16px] font-[800]'
                            >{classname}</Text>
                    </View>
                    <Text
                        className='text-[15px] text-[#ffffff] font-[600] mt-[10]'
                    >{description}</Text>
                    <Text
                        style={{ color: 'yellow' }}
                        className='text-[15px] font-[600] mt-[10]'
                    >{name}</Text>

                    <TouchableWithoutFeedback
                        onPress={() => Alert.alert("OPTION DIPICIK")}
                    >
                        <SimpleLineIcons name="options" size={20} color={"#fff"}
                            className='self-end absolute right-[20] top-[12]'
                        />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardClass

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#3A8DBC",
        borderRadius: 16,
        padding: 15,
        marginBottom: 10,
        width: "95%",
        alignSelf: "center"
    }
})