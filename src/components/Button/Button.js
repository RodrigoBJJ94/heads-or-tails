import React, { useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import Styles from './Styles';

export default function Button() {
    const coins = [
        require('../../assets/img/coin1.gif'),
        require('../../assets/img/coin5.gif'),
        require('../../assets/img/coin1.gif'),
        require('../../assets/img/coin2.gif'),
        require('../../assets/img/coin3.gif'),
        require('../../assets/img/coin4.gif'),
        require('../../assets/img/coin5.gif'),
        require('../../assets/img/coin6.gif'),
        require('../../assets/img/coin7.gif'),
        require('../../assets/img/coin8.gif')
    ];

    let indexCoin = 0;
    const maxTurns = 10;

    const [coinCurrent, setCoinCurrent] = useState(coins[indexCoin]);

    async function wait(tmp) {
        function time(ms) {
            return new Promise((resolve => setTimeout(resolve, ms)));
        };
        await time(tmp);
    };

    async function turnCoin() {
        indexCoin = 2;

        for (let i = 0; i < (maxTurns * 8); i++) {
            indexCoin++;
            if (indexCoin > 9) {
                indexCoin = 2;
            };
            setCoinCurrent(coins[indexCoin]);
            await wait(10);
        };

        let result = Math.floor(Math.random() * 10) + 1;

        if (result <= 5) {
            result = 0;
        } else {
            result = 1;
        };
        setCoinCurrent(coins[result]);
    };

    return (
        <>
            <Image source={coinCurrent} />
            <TouchableOpacity style={Styles.button} onPress={() => { turnCoin() }}>
                <Text style={Styles.buttonText}>SPIN</Text>
            </TouchableOpacity>
        </>
    );
};
