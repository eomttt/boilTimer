import { useNavigation } from '@react-navigation/native';
import { Router } from 'constants/route';
import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import Styles from './styles';

export const Bottom = () => {
  const navigation = useNavigation();

  const handleClickHome = useCallback(() => {
    navigation.navigate(Router.HOME);
  }, [navigation]);

  const handleClickGuide = useCallback(() => {
    navigation.navigate(Router.GUIDE);
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <TouchableHighlight style={Styles.button} onPress={handleClickHome}>
          <Text style={Styles.text}>HOME</Text>
        </TouchableHighlight>
        <TouchableHighlight style={Styles.button} onPress={handleClickGuide}>
          <Text style={Styles.text}>GUIDE</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
