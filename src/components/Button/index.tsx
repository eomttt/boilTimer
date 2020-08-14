import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Styles from './styles';
import { Size } from 'constants/button';

interface ButtonProps {
  label: string;
  size?: Size;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  size = Size.NORMAL,
  onClick,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const getButtonStyle = useCallback(() => {
    if (size === Size.SMALL) {
      return [Styles.button, Styles.small];
    }

    return Styles.button;
  }, [size]);

  const getTextStyle = useCallback(() => {
    if (size === Size.SMALL) {
      return [Styles.bottomText, Styles.smallBottomText];
    }

    return Styles.bottomText;
  }, [size]);

  return (
    <TouchableHighlight style={getButtonStyle()} onPress={handleClick}>
      <Text style={getTextStyle()}>{label}</Text>
    </TouchableHighlight>
  );
};
