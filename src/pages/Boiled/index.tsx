import { Layout } from 'components/Layout';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { BoiledIndicate, BoiledTime } from 'constants/boiled';
import Styles from './styles';

export const Boiled = () => {
  const getBoiledTime = useCallback(
    (indicate: BoiledIndicate) => BoiledTime[indicate],
    [],
  );

  return (
    <Layout>
      <View style={Styles.titleContainer}>
        <Text>삶은 정도를 정해보세요!</Text>
      </View>
      <View style={Styles.imageContainer} />
      <View style={Styles.inputContainer} />
    </Layout>
  );
};
