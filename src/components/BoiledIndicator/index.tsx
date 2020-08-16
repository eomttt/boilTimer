import { Button } from 'components/Button';
import { BoiledIndicate, BoiledText } from 'constants/boiled';
import React from 'react';
import { View } from 'react-native';
import Styles from './styles';

interface BoiledIndicatorProps {
  onClick: (indicator: BoiledIndicate) => void;
}

export const BoiledIndicator: React.FunctionComponent<BoiledIndicatorProps> = ({
  onClick,
}) => {
  return (
    <View style={Styles.container}>
      {Object.keys(BoiledText).map((key: string) => {
        return (
          <View key={key} style={Styles.item}>
            <Button
              label={BoiledText[key as BoiledIndicate]}
              onClick={() => onClick(key as BoiledIndicate)}
            />
          </View>
        );
      })}
    </View>
  );
};
