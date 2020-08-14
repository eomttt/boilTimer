import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Router } from 'constants/route';
import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import Styles from './styles';

export const Home = () => {
  const navigation = useNavigation();

  const handleOpenTimer = useCallback(() => {
    navigation.navigate(Router.TIMER);
  }, [navigation]);

  const handleOpenBoiled = useCallback(() => {
    navigation.navigate(Router.BOILED);
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
          <View style={Styles.buttonWrapper}>
            <Button label={'시작'} onClick={handleOpenTimer} />
          </View>
          <Button label={'삶은 정도 설정'} onClick={handleOpenBoiled} />
        </View>
      </View>
    </Layout>
  );
};
