import React from 'react'
import { Image, View } from 'react-native'
import DiscordImg from '../../assets/images/discord.png'
import { Styles } from './style'

type Props = {
  guildId: string;
  iconId: string | null;
}

export const GuildIcon: React.FC<Props> = ({ guildId, iconId }: Props) => {
  const { CDN_IMAGE } = process.env
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View style={Styles.container}>
      {
        iconId 
        ? <Image source={{ uri }} style={Styles.image} resizeMode="cover" />
        : <DiscordImg width={40} height={40}/>
      }
    </View>
  )
}