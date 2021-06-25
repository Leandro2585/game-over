import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { } from 'expo-linear-gradient'
import { Styles } from './style'

type Props = {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<Props> = ({ title, action }: Props) => {
  return(
    <View></View>
  )
}