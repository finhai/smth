import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Simples from './components/Simples';
import Styles from './styles/Styles';
import Folie from './components/Folie';
import {Inverter, MegaSena} from './components/Multi';

var RNG = Math.random() * 100;
RNG = Math.ceil(RNG);

export default function() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.ex}>smth</Text>
      <Simples text="flexible" />
      <Folie number={RNG} />
      <Inverter text="React Native" />
      <MegaSena numbers={6} />
    </View>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.f20}>smth</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   f20: {
//     fontSize: 60,
//   },
// });

export {RNG};
