import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

export const Home = () => {
  const handleClickTimer = useCallback(() => {
    console.log('Start timer');
  }, []);

  return (
    <View>
      <Text style={Styles.title}>
        물이 끓기 시작하면 시작 버튼을 눌러주세요!
      </Text>
      <View onTouchStart={handleClickTimer}>
        <Text>시작</Text>
      </View>
    </View>
  );
};
