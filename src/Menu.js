import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Simples from './components/Simples';
import Styles from './styles/Styles';
import Folie from './components/Folie';
import {Inverter, MegaSena} from './components/Multi';
import {RNG} from './App';
import Contador from './components/Contador';

export default createDrawerNavigator(
  {
    Contador: {
      screen: () => <Contador />,
    },
    MegaSena: {
      screen: () => <MegaSena numbers={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverter: {
      screen: () => <Inverter text="React Native" />,
    },
    Folie: {
      screen: () => <Folie number={RNG} />,
      navigationOptions: {title: 'Folie'},
    },
    Simples: {
      screen: () => <Simples text="Flexible" />,
    },
  },
  {drawerWidth: 200},
);
