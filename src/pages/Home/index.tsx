import React, { useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { View, FlatList } from 'react-native'
import { ButtonAdd, Profile, CategorySelect, ListHeader, Appointment, ListDivider, Background, AppointmentProps, Loading } from '../../components'
import { CategoryProvider, useCategory } from '../../hooks/category'
import { Styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/storage'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const { currentCategorySelected } = useCategory()
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const handleAppointmentDetails = (currentGuildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDetails', { guildSelected: currentGuildSelected})
  }
  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')
  
  const fetchAppointments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []
    if(currentCategorySelected) {
      setAppointments(storage.filter(item => item.category === currentCategorySelected))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    fetchAppointments()
  }, [currentCategorySelected]))
  return (
    <CategoryProvider>
      <Background>
        <View style={Styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <CategorySelect/>
        {loading 
          ? <Loading/>
          : <>
              <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>
              <FlatList 
                keyExtractor={item => item.id} 
                data={appointments}
                style={Styles.matches}
                renderItem={({item}) => 
                  <Appointment data={item} onPress={() => handleAppointmentDetails(item)} /> 
                } 
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{ paddingBottom: 69 }}
              />
            </>
        }
      </Background>
    </CategoryProvider>
  )
}