import React from 'react'
import { View, Text, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Avatar } from '../'
import { useAuth } from '../../hooks/auth'
import { Styles } from './style'

export const Profile: React.FC = () => {
  const { user: { avatar, firstName }, logout } = useAuth()
  const handleSignOut = () => {
    Alert.alert('Logout', 'Deseja sair do GameOver?', [
      { text: 'Não', style: 'cancel'}, 
      { text: 'Sim', onPress: () => logout() }
    ])
  }
  return (
    <View style={Styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar url={avatar}/>
      </RectButton>
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