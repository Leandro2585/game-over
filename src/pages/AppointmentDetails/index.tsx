import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View, FlatList, Alert, Share, Platform } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import * as Linking from 'expo-linking'
import { Background, Header, ListHeader, Member, ListDivider, Loading, ButtonIcon, MemberProps, AppointmentProps } from '../../components'
import { theme } from '../../styles/theme'
import { Styles } from './style'
import BannerImg from '../../assets/images/banner.png'
import { api } from '../../services/api'

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export const AppointmentDetails: React.FC = () => {
  const route = useRoute()
  const { guildSelected } = route.params as Params
  const [guildWidget, setGuildWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)
  const fetchGuildWidget = async () => {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setGuildWidget(response.data)
    } catch {
      Alert.alert('Verifique suas configurações do servidor, o Widget pode estar desabilitado')
    } finally {
      setLoading(false)
    }
  }

  const handleShareInvitation = () => {
    const message = Platform.OS === 'ios'
      ? `Juste-se a ${guildSelected.guild.name}`
      : guildWidget.instant_invite
    
      Share.share({
        message,
        url: guildWidget.instant_invite
      })
  }

  const handleOpenGuild = () => {
    Linking.openURL(guildWidget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          guildSelected.guild.owner &&
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary}/>
            </BorderlessButton>
        }  
      />

      <ImageBackground source={BannerImg} style={Styles.banner}>
        <View style={Styles.bannerContent}>
          <Text style={Styles.title}>{guildSelected.guild.name}</Text>
          <Text style={Styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      { 
        loading 
        ? <Loading/> : 
        <>
          <ListHeader title="Jogadores" subtitle={`Total ${guildWidget.members.length}`}/>

          <FlatList 
            data={guildWidget.members}
            style={Styles.members}
            keyExtractor={member => member.id}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
          />
        </>
      }
      
      {
        guildSelected.guild.owner &&
        <View style={Styles.footer}>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild}/>
        </View>
      }
    </Background>
  )
}