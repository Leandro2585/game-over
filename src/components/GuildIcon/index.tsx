import React from 'react'
import { Image } from 'react-native'
import { Styles } from './style'

export const GuildIcon: React.FC = () => {
  const uri = 'https://i.redd.it/28y7kc7ibn071.jpg'
  return (
    <Image source={{ uri }} style={Styles.image} resizeMode="cover" />
  )
}