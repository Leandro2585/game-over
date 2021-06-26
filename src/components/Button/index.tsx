import React from 'react'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Styles } from './style'

type Props = RectButtonProps & {
  title: string;
}

export const Button: React.FC<Props> = ({ title, ...props }: Props) => {
  return (
    <RectButton style={Styles.container} {...props}>
      <Text style={Styles.title}>{title}</Text>
    </RectButton>
  )
}