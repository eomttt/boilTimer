import { BoiledIndicator } from 'components/BoiledIndicator';
import { Layout } from 'components/Layout';
import { BoiledImage, BoiledIndicate, BoiledTime } from 'constants/boiled';
import { BoiledDatabase } from 'helpers/BoiledDatabase';
import React, { useCallback, useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
    BoiledDatabase.setIndicator(indicator);
    setSelectedIndicator(indicator);
  }, []);

  return (
    <Layout>
      <View>
        <Text style={Styles.title}>삶은 정도를 정해보세요!</Text>
      </View>
      <View style={Styles.imageContainer}>
        <Image style={Styles.image} source={boiledImageUrl} />
      </View>
      <View>
        <Text style={Styles.inputText}>{`${boiledTime} 분`}</Text>
      </View>
      <ScrollView style={Styles.indicatorContainer}>
        <BoiledIndicator onClick={handleSelectIndicator} />
      </ScrollView>
    </Layout>
  );
};
