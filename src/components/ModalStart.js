import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function ModalStart() {
    const [visible, SetVisible] = useState(true);
    return (
        <View>
            <Modal
                animationType="slide"
                visible={visible}
            ><View style={styles.container}>
                <StatusBar backgroundColor="rgb(235, 192, 20)" />
                    <Text style={styles.title}>Heads or Tails</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => SetVisible(false)}
                    ><Text style={styles.textButton}>START</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 46,
        fontFamily: 'Montserrat-ExtraBold',
        marginTop: 70,
        marginBottom: 50,
    },
    button: {
        backgroundColor: 'rgb(235, 192, 20)',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    textButton: {
        fontSize: 30,
        fontFamily: 'Montserrat-ExtraBold',
    }
});