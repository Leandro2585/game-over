import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList } from 'react-native'
import { ButtonAdd, Profile, CategorySelect, ListHeader, Appointment, ListDivider } from '../../components'
import { CategoryProvider } from '../../contexts/CategoryContext'
import { appointments } from '../../fakes/Appointments'
import { Styles } from './style'

export const Home: React.FC = () => {
  const navigation = useNavigation()

  const handleAppointmentDetails = () => navigation.navigate('AppointmentDetails')
  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')
  return (
    <CategoryProvider>
      <View>
        <View style={Styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <CategorySelect/>
        <View style={Styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6"/>
          <FlatList 
            keyExtractor={item => item.id} 
            data={appointments}
            style={Styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
                onPress={handleAppointmentDetails}  
              />
            )} 
          />
        </View>
      </View>
    </CategoryProvider>
  )
}