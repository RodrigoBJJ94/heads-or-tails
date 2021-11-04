import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import Styles from './Styles';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Button from '../Button/Button';

export default function ModalStart() {
    const [visible, setVisible] = useState(true);

    return (
        <View>
            <Modal animationType="slide" visible={visible}>
                <View style={Styles.container}>
                    <Statusbar />
                    <Title />
                    <Button setVisible={setVisible} />
                </View>
            </Modal>
        </View>
    );
};
