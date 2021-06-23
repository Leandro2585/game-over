import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon }from '../../components'
import IllustrationImg from '../../assets/illustration.png'
import { Styles } from './style'

export const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const handleSingIn = () => navigation.navigate('Home')
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

        <ButtonIcon 
          onPress={handleSingIn} 
          title="Entrar com Discord" 
        />
      </View>
    </View>
  )  
}