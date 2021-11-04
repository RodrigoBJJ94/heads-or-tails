import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import Statusbar from './components/Statusbar/Statusbar';
import Modal from './components/Modal/Modal/ModalMain';
import Title from './components/Title/Title';
import Button from './components/Button/Button';

export default function App() {
  return (
    <View style={Styles.container}>
      <Statusbar />
      <Modal />
      <Title />
      <Button />
    </View>
  );
};
