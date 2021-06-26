import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Background, Header, ModalView, CategorySelect, GuildIcon, SmallInput, TextArea, Button, GuildProps } from '../../components'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import uuid from 'react-native-uuid'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../../styles/theme'
import { Guilds } from '../'
import { useCategory } from '../../hooks/category'
import { COLLECTION_APPOINTMENTS } from '../../configs/storage'
import { Styles } from './style'

export const AppointmentCreate: React.FC = () => {
  const navigation = useNavigation()
  const { currentCategorySelected } = useCategory()
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const handleOpenGuildsModal = () => setOpenGuildsModal(true)

  const handleCloseOpenGuildsModal = () => setOpenGuildsModal(false)

  const handleGuildSelect = (guildSelected: GuildProps) => {
    setGuild(guildSelected)
    setOpenGuildsModal(false)
  }

  const handleCreateAppointment = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category: currentCategorySelected,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []
    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]))
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView 
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida"/>
          <Text style={[
            Styles.label, { 
              marginLeft: 24, 
              marginTop: 36,
              marginBottom: 18
            }]}>Categoria</Text>
          <CategorySelect/>
          <View style={Styles.form}>
            <RectButton onPress={handleOpenGuildsModal}>
              <View style={Styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon iconId={guild.icon} guildId={guild.id}/>
                  : <View style={Styles.image}/>
                }
                <View style={Styles.selectBody}>
                  <Text style={Styles.label}>
                    { 
                      guild.name 
                      ? guild.name 
                      : 'Selecione um servidor'
                    }
                  </Text>
                </View>
                <Feather name="chevron-right" color={theme.colors.heading} size={18}/>
              </View>
            </RectButton>

            <View style={Styles.field}>
              <View>
                <Text style={[Styles.label, { paddingBottom: 12 }]}>Dia e mês</Text>
                <View style={Styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay}/>
                  <Text style={Styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth}/>
                </View>
              </View>
              <View>
                <Text style={[Styles.label, { paddingBottom: 12 }]}>Horário</Text>
                <View style={Styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour}/>
                  <Text style={Styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute}/>
                </View>
              </View>
            </View>

            <View style={[Styles.field, { marginBottom: 12 }]}>
              <Text style={Styles.label}>Descrição</Text>
              <Text style={Styles.charactersLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea 
              multiline 
              maxLength={100} 
              numberOfLines={5} 
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={Styles.footer}>
              <Button title="Agendar" onPress={handleCreateAppointment}/>
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseOpenGuildsModal}>
        <Guilds handleGuildsSelected={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}