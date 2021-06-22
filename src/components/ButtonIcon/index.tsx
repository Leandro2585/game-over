import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, Image, View } from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { Styles } from './style'

type Props = RectButtonProps & {
  title: string;
}

export const ButtonIcon: React.FC<Props> = ({ title, ...props }: Props) => {
  return (
    <RectButton style={Styles.container} {...props}>
      <View style={Styles.iconWrapper}>
        <Image source={DiscordImg} style={Styles.icon}/>
      </View>
      <Text style={Styles.title}>{title}</Text>
    </RectButton>
  )
}