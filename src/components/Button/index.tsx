import React from 'react';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Styles from './styles';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  label, onClick,
}: ButtonProps) => {
  return (
    <TouchableHighlight style={Styles.button} onPress={onClick}>
      <Text style={Styles.bottomText}>{label}</Text>
    </TouchableHighlight>
  );
};
