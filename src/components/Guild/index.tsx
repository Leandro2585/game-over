import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../'
import { Styles } from './style'
import { theme } from '../../styles/theme'

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export const Guild: React.FC<Props> = ({data, ...rest}: Props) => {
  return (
    <TouchableOpacity 
      style={Styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon/>
      <View style={Styles.content}>
        <View>
          <Text style={Styles.title}>{data.name}</Text>
          <Text style={Styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>

      <Feather 
        name="chevron-right" 
        color={theme.colors.heading} 
        size={24}
      />
    </TouchableOpacity>
  )
}