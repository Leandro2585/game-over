import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '../'
import { Styles } from './style'

export const Profile: React.FC = () => {
  return (
    <View style={Styles.container}>
      <Avatar url="https://github.com/Leandro2585.png"/>
      <View>
        <View style={Styles.user}>
          <Text style={Styles.greeting}>Olá</Text>
          <Text style={Styles.username}>Leandro</Text>
        </View>
        <Text style={Styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}