import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/theme';
import { Styles } from './style';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { background, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={Styles.container}
      colors={[ secondary100, background]}
    >
      {children}
    </LinearGradient>
  )
}