import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from './style'

type Props = {
  title: string;
  subtitle: string;
}

export const ListHeader: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.subtitle}>{subtitle}</Text>
    </View>
  )
}