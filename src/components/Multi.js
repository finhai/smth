import React from 'react';
import {Text} from 'react-native';
import Styles from '../styles/Styles';

export const Inverter = props => {
  const inv = props.text
    .split('')
    .reverse()
    .join('');
  return <Text style={Styles.ex}>{inv}</Text>;
};

export const MegaSena = props => {
  const [min, max] = [1, 60];
  const numbers = Array(props.numbers || 6).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    let neu = 0;
    while (numbers.includes(neu)) {
      neu = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numbers[i] = neu;
  }

  numbers.sort((a, b) => a - b);
  return <Text style={Styles.ex}>{numbers.join(', ')}</Text>;
};
