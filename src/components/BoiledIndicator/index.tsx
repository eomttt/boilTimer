import { BoiledIndicate, BoiledText } from 'constants/boiled';
import React from 'react';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface BoiledIndicatorProps {
  onClick: (indicator: BoiledIndicate) => void;
}

export const BoiledIndicator: React.FunctionComponent<BoiledIndicatorProps> = ({
  onClick,
}) => {
  return (
    <>
      {Object.keys(BoiledText).map((key: string) => {
        return (
          <TouchableHighlight
            key={key}
            onPress={() => onClick(key as BoiledIndicate)}>
            <Text>{BoiledText[key as BoiledIndicate]}</Text>
          </TouchableHighlight>
        );
      })}
    </>
  );
};
