import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ setVisible }) {
    return (
        <TouchableOpacity style={Styles.button} onPress={() => setVisible(false)}>
            <Text style={Styles.textButton}>START</Text>
        </TouchableOpacity>
    );
};
