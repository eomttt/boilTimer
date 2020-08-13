import React, { useCallback } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Layout } from 'components/Layout';
import Styles from './styles';

export const Home = () => {
  const handleClickTimer = useCallback(() => {
    console.log('Start timer');
  }, []);

  return (
    <Layout>
      <View style={Styles.container}>
        <View style={Styles.title}>
          <Text>물이 끓기 시작하면 시작 버튼을 눌러주세요!</Text>
        </View>
        <View style={Styles.buttonWrapper}>
          <TouchableHighlight onPress={handleClickTimer}>
            <Text>시작</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Layout>
  );
};
