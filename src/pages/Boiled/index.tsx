import { Layout } from 'components/Layout';
import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';

export const Boiled = () => {
  return (
    <Layout>
      <View style={Styles.titleContainer}>
        <Text>삶은 정도를 정해보세요!</Text>
      </View>
      <View style={Styles.imageContainer}>
        
      </View>
      <View style={Styles.inputContainer}>
      </View>
    </Layout>
  );
};
