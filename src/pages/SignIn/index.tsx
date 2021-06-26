import React from 'react'
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon }from '../../components'
import { useAuth } from '../../hooks/auth'
import IllustrationImg from '../../assets/images/illustration.png'
import { Styles } from './style'
import { theme } from '../../styles/theme'

export const SignIn: React.FC = () => {
  const { authenticate, loading }  = useAuth()

  const handleSingIn = async () => {
    try {
      await authenticate()
    } catch (error) {
      Alert.alert(error)
    }
  }
  
  return (
    <View style={Styles.container}>
      <Image source={IllustrationImg} style={Styles.image} resizeMode="stretch"/>
      <View style={Styles.content}>
        <Text style={Styles.title}>
          Conecte-se {`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>

        <Text style={Styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        {loading 
          ? <ActivityIndicator color={theme.colors.primary}/>
          : <ButtonIcon 
              onPress={handleSingIn} 
              title="Entrar com Discord" 
            />
        }
      </View>
    </View>
  )  
}