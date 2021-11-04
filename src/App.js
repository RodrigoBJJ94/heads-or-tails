import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import ModalStart from './components/ModalStart';

export default function App() {
  const coins = [
    require('./assets/img/coin1.gif'),
    require('./assets/img/coin5.gif'),
    require('./assets/img/coin1.gif'),
    require('./assets/img/coin2.gif'),
    require('./assets/img/coin3.gif'),
    require('./assets/img/coin4.gif'),
    require('./assets/img/coin5.gif'),
    require('./assets/img/coin6.gif'),
    require('./assets/img/coin7.gif'),
    require('./assets/img/coin8.gif')
  ];

  let indexCoin = 0;
  const maxTurns = 10;

  const [coinCurrent, setCoinCurrent] = useState(coins[indexCoin]);

  async function wait(tmp) {
    function time(ms) {
      return new Promise((resolve => setTimeout(resolve, ms)));
    }
    await time(tmp);
  };

  async function turnCoin() {
    indexCoin = 2;

    for (let i = 0; i < (maxTurns * 8); i++) {
      indexCoin++;
      if (indexCoin > 9) {
        indexCoin = 2
      }
      setCoinCurrent(coins[indexCoin]);
      await wait(10)
    }

    let result = Math.floor(Math.random() * 10) + 1;

    if (result <= 5) {
      result = 0;
    } else {
      result = 1;
    }

    setCoinCurrent(coins[result]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <ModalStart />
      <Text style={styles.title}>Heads or Tails</Text>
      <Image source={coinCurrent} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => { turnCoin() }}
      ><Text style={styles.buttonText}>SPIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 46,
    fontFamily: 'Montserrat-ExtraBold',
    marginBottom: 60,
    color: 'rgb(235, 192, 20)',
  },
  button: {
    width: '95%',
    height: 60,
    backgroundColor: 'rgb(235, 192, 20)',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#000'
  }
});

