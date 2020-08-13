import React from 'react';
import { SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import Styles from './styles';

export const Bottom = () => {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <TouchableHighlight style={Styles.button}>
          <Text style={Styles.text}>HOME</Text>
        </TouchableHighlight>
        <TouchableHighlight style={Styles.button}>
          <Text style={Styles.text}>GUIDE</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
