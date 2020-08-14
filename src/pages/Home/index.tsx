import { useNavigation } from '@react-navigation/native';
import { Layout } from 'components/Layout';
import React, { useCallback } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import Styles from './styles';
import { Router } from 'constants/route';

export const Home = () => {
  const navigation = useNavigation();

  const handleClickTimer = useCallback(() => {
    navigation.navigate(Router.TIMER);
  }, [navigation]);

  return (
    <Layout>
      <View style={Styles.container}>
        <View style={Styles.top}>
          <View style={Styles.titleWrapper}>
            <Text style={Styles.title}>물이 끓기 시작하면</Text>
            <Text style={Styles.titleEmphasize}>시작</Text>
            <Text style={Styles.title}>버튼을 눌러주세요!</Text>
          </View>
        </View>
        <View style={Styles.middle}>
          <Image
            style={Styles.image}
            source={require('assets/images/home-icon.png')}
          />
        </View>
        <View style={Styles.bottom}>
          <TouchableHighlight onPress={handleClickTimer}>
            <View style={Styles.button}>
              <Text style={Styles.bottomText}>시작</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Layout>
  );
};
