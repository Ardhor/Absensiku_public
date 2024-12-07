// ModalError.tsx
import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ModalErrorProps = {
    visible: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

const ModalError: React.FC<ModalErrorProps> = ({ visible, title, message, onClose }) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="close" size={90} color="white" />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        position: 'absolute',
        top: '40%',
        width: '75%',
        backgroundColor: '#c2c2c2',
        borderRadius: 15,
        alignItems: 'center',
        padding: 15,
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: '#FF4C4C',
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        top: -50,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 22,
        color: '#000',
        fontWeight: '700',
        marginBottom: 10,
        textAlign: "center"
    },
    message: {
        fontSize: 16,
        color: '#000',
        fontWeight: '400',
        marginBottom: 30,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#A83C2A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 200,
        height: 40
    },
    buttonText: {
        color: '#fff',
        fontWeight: "500",
        fontSize: 17,
    },
});

export default ModalError;
