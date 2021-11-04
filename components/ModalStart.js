import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalStart() {
    const [visible, SetVisible] = useState(true);
    return (
        <View>
            <Modal
                animationType='slide'
                visible={visible}
            ><View style={styles.block}>
                    <Text style={styles.text}>Cara ou coroa</Text>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => SetVisible(false)}
                    ><Text>COMEÇAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 15,
    },
    touch: {
        backgroundColor: 'rgb(235, 192, 20)',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    block: {
        alignItems: 'center',
    },
});