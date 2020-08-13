import React, { useCallback } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Layout } from 'components/Layout';
import Styles from './styles';

export const Home = () => {
  const handleClickTimer = useCallback(() => {
    console.log('Start timer');
  }, []);

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
