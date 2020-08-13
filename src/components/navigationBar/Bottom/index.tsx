import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Styles from './styles';

export const Bottom = () => {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <Text style={Styles.text}>Bottom navigation</Text>
      </View>
    </SafeAreaView>
  );
};
