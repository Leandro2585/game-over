import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../styles/theme'
import { Avatar } from '../Avatar'
import { Styles } from './style'

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps;
}

export const Member: React.FC<Props> = ({ data }: Props) => {
  const { on, primary } = theme.colors
  const isOnline = () => {
    switch(data.status) {
      case 'online':
        return 'Disponível'
      default:
        return 'Ocupado'
    }
  }
  return(
    <View style={Styles.container}>
      <Avatar url={data.avatar_url}/>
      <View>
        <Text style={Styles.title}>
          { data.username }
        </Text>
        <View style={Styles.status}>
          <View style={[Styles.bulletStatus, { backgroundColor: data.status === 'online' ? on : primary }]}/>
          <Text style={Styles.nameStatus}>
            {isOnline}
          </Text>
        </View>
      </View>
    </View>
  )
}