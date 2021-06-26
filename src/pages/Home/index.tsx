import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList } from 'react-native'
import { ButtonAdd, Profile, CategorySelect, ListHeader, Appointment, ListDivider, Background } from '../../components'
import { CategoryProvider } from '../../hooks/category'
import { appointments } from '../../fakes/Appointments'
import { Styles } from './style'

export const Home: React.FC = () => {
  const navigation = useNavigation()

  const handleAppointmentDetails = () => navigation.navigate('AppointmentDetails')
  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')
  return (
    <CategoryProvider>
      <Background>
        <View style={Styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <CategorySelect/>
        <ListHeader title="Partidas agendadas" subtitle="Total 6"/>
        <FlatList 
          keyExtractor={item => item.id} 
          data={appointments}
          style={Styles.matches}
          renderItem={({item}) => 
            <Appointment data={item} onPress={handleAppointmentDetails} /> 
          } 
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider/>}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </Background>
    </CategoryProvider>
  )
}