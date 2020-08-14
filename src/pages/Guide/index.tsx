import { Layout } from 'components/Layout';
import React from 'react';
import { Text } from 'react-native';

export const Guide = () => {
  return (
    <Layout>
      <Text>1. 물을 끓인다.</Text>
      <Text>
        2. 물이 끓을 때 까지 기다리는 동안 어떤 상태로 삶을 지, 계란에 삶은
        정도를 정한다.
      </Text>
      <Text>3. 물이 끓기 시작하면 계란을 넣는다.</Text>
      <Text>4. 시작 버튼을 누른다.</Text>
      <Text>
        5. 알람이 울리면 계란을 꺼낸다. 또는 더 익히고 싶으면 기다렸다가 계란의
        삶은 정도 모양을 보고나서 원하는 정도에 꺼낸다.
      </Text>
      <Text />
    </Layout>
  );
};
