import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Styles from '../styles/Styles';

export default class Contador extends Component {
  state = {
    number: 0,
  };

  anotherOne = () => {
    this.setState({number: this.state.number + 1});
  };

  clean = () => {
    this.setState({number: 0});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.number}</Text>
        <TouchableHighlight onPress={this.anotherOne} onLongPress={this.clean}>
          <Text style={Styles.ex}>increment/clean</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
