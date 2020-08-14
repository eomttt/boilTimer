import { Layout } from 'components/Layout';
import React, { useCallback } from 'react';
import { Text, Image, View } from 'react-native';
import Styles from './styles';
import { Button } from 'components/Button';
import { Router } from 'constants/route';
import { useNavigation } from '@react-navigation/native';
import { Size as ButtonSize } from 'constants/button';
import { ScrollView } from 'react-native-gesture-handler';

export const Guide = () => {
  const navigation = useNavigation();

  const handleOpenBoiled = useCallback(() => {
    navigation.navigate(Router.BOILED);
  }, [navigation]);

  return (
    <Layout>
      <View style={Styles.imageContainer}>
        <Image
          resizeMode={'cover'}
          style={Styles.image}
          source={require('assets/images/perfect-step.jpg')}
        />
      </View>
      <View style={Styles.content}>
        <ScrollView>
          <Text style={Styles.contentText}>1. 달걀을 물에 넣는다.</Text>
          <Text style={Styles.contentText}>2. 물을 끓인다.</Text>
          <Text style={Styles.contentText}>
            <Text>
              3. 물이 끓을 때 까지 기다리는 동안 어떤 상태로 삶을 지, 계란에
            </Text>
            <Button
              size={ButtonSize.SMALL}
              label={'삶은 정도'}
              onClick={handleOpenBoiled}
            />
            <Text>를 정한다.</Text>
          </Text>
          <Text style={Styles.contentText}>
            4. 물이 끓기 시작하면 불을 끈다.
          </Text>
          <Text style={Styles.contentText}>
            <Text>5.</Text>
            <Button size={ButtonSize.SMALL} label={'시작'} />
            <Text>을 누른다.</Text>
          </Text>
          <Text style={Styles.contentText}>
            6. 알람이 울리면 계란을 꺼낸다. 또는 더 익히고 싶으면 기다렸다가
            계란의 삶은 정도 모양을 보고나서 원하는 정도에 꺼낸다.
          </Text>
          <Text />
        </ScrollView>
      </View>
    </Layout>
  );
};
