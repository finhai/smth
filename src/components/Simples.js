import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../styles/Styles';

// export default function(props) {
//   return <Text>{props.text}</Text>;
// }

export default props => <Text style={Styles.ex}>{props.text}</Text>;
