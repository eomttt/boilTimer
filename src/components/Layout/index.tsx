import React, { ReactNode } from 'react';
import { Top } from 'components/navigationBar/Top';
import { Bottom } from 'components/navigationBar/Bottom';
import { View } from 'react-native';
import Styles from './styles';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Top />
      <View style={Styles.wrapper}>{children}</View>
      <Bottom />
    </>
  );
};
