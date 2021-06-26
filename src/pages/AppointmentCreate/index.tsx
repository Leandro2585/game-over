import React from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { Background, Header, CategorySelect, GuildIcon, SmallInput, TextArea, Button } from '../../components'
import { Styles } from './style'
import { theme } from '../../styles/theme'

export const AppointmentCreate: React.FC = () => {
  return (
    <KeyboardAvoidingView 
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida"/>
          <Text style={[
            Styles.label, { 
              marginLeft: 24, 
              marginTop: 36,
              marginBottom: 18
            }]}>Categoria</Text>
          <CategorySelect/>
          <View style={Styles.form}>
            <RectButton>
              <View style={Styles.select}>
                {
                  // <View style={Styles.image}/>
                  <GuildIcon/>
                }
                <View style={Styles.selectBody}>
                  <Text style={Styles.label}>Selecione um servidor</Text>
                </View>
                <Feather name="chevron-right" color={theme.colors.heading} size={18}/>
              </View>
            </RectButton>

            <View style={Styles.field}>
              <View>
                <Text style={Styles.label}>Dia e mês</Text>
                <View style={Styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={Styles.divider}>/</Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>
              <View>
                <Text style={Styles.label}>Horário</Text>
                <View style={Styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={Styles.divider}>:</Text>
                  <SmallInput maxLength={2}/>
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
            />
            <View style={Styles.footer}>
              <Button title="Agendar"/>
            </View>
          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}