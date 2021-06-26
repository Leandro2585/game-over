import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '../'
import { useAuth } from '../../hooks/auth'
import { Styles } from './style'

export const Profile: React.FC = () => {
  const { user: { avatar, firstName } } = useAuth()

  return (
    <View style={Styles.container}>
      <Avatar url={avatar}/>
      <View>
        <View style={Styles.user}>
          <Text style={Styles.greeting}>Olá</Text>
          <Text style={Styles.username}>{firstName}</Text>
        </View>
        <Text style={Styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}