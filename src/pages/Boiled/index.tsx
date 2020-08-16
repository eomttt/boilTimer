import { BoiledIndicator } from 'components/BoiledIndicator';
import { Layout } from 'components/Layout';
import { BoiledIndicate, BoiledTime, BoiledImage } from 'constants/boiled';
import React, { useCallback, useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Styles from './styles';

export const Boiled = () => {
  const [selectedIndicator, setSelectedIndicator] = useState<BoiledIndicate>(
    BoiledIndicate.SOFT,
  );
  const boiledTime = useMemo(() => BoiledTime[selectedIndicator], [
    selectedIndicator,
  ]);
  const boiledImageUrl = useMemo(() => BoiledImage[selectedIndicator], [
    selectedIndicator,
  ]);

  const handleSelectIndicator = useCallback((indicator: BoiledIndicate) => {
    setSelectedIndicator(indicator);
  }, []);

  return (
    <Layout>
      <View style={Styles.titleContainer}>
        <Text>삶은 정도를 정해보세요!</Text>
      </View>
      <View style={Styles.imageContainer}>
        <Image source={boiledImageUrl} />
      </View>
      <View style={Styles.inputContainer}>
        <Text>{boiledTime}</Text>
      </View>
      <BoiledIndicator onClick={handleSelectIndicator} />
    </Layout>
  );
};
