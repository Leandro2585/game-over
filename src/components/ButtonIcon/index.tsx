import React from 'react'
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { Styles } from './style'

type Props = TouchableOpacityProps & {
  title: string;
}

export const ButtonIcon = ({ title, ...props }: Props) => {
  return (
    <TouchableOpacity style={Styles.container} {...props}>
      <View style={Styles.iconWrapper}>
        <Image source={DiscordImg} style={Styles.icon}/>
      </View>
      <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}