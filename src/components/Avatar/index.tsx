import React from 'react'

import { View, Image } from 'react-native'
import { Styles } from './style'

type Props = {
  url: string;
}

export const Avatar: React.FC<Props> = ({ url }: Props) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.avatar} source={{ uri: url }}/>
    </View>
  )
}