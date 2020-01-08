import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../styles/Styles';
import If from './If';

function Folie(num) {
  // if (num % 2 == 0) {
  //   return <Text style={Styles.ex}>even</Text>;
  // } else {
  //   <Text style={Styles.ex}>uneven</Text>;
  // }
  // eslint-disable-next-line eqeqeq
  const v = num % 2 == 0 ? 'even' : 'uneven';
  return (
    <View>
      <Text style={Styles.ex}>{v}</Text>
    </View>
  );
}

// {Folie(props.number)}
// {props.number % 2 == 0 ? (
//   <Text style={Styles.ex}>even</Text>
// ) : (
//   <Text style={Styles.ex}>uneven</Text>
// )}

export default props => (
  <View>
    <If test={props.number % 2 == 0}>
      <Text style={Styles.ex}>even</Text>
    </If>
    <If test={props.number % 2 == 1}>
      <Text style={Styles.ex}>uneven</Text>
    </If>
  </View>
);
