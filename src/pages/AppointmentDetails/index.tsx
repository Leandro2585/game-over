import React from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Background, Header, ListHeader, Member, ListDivider, ButtonIcon, MemberProps } from '../../components'
import { theme } from '../../styles/theme'
import { Styles } from './style'
import BannerImg from '../../assets/images/banner.png'
import { members } from '../../fakes/Members'

export const AppointmentDetails: React.FC = () => {
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary}/>
          </BorderlessButton>
        }  
      />

      <ImageBackground source={BannerImg} style={Styles.banner}>
        <View style={Styles.bannerContent}>
          <Text style={Styles.title}>Lendários</Text>
          <Text style={Styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida md10</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3"/>

      <FlatList 
        data={members}
        style={Styles.members}
        keyExtractor={member => member.id}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
      />

      <View style={Styles.footer}>
        <ButtonIcon title="Entrar na partida"/>
      </View>
    </Background>
  )
}