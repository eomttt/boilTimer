import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Styles from './styles';

export const Top = () => {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <Text style={Styles.text}>Boil Timer</Text>
      </View>
    </SafeAreaView>
  );
};
