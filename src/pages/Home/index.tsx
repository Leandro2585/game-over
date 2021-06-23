import React from 'react'
import { View, FlatList } from 'react-native'
import { ButtonAdd, Profile, CategorySelect, ListHeader, Appointment, ListDivider } from '../../components'
import { CategoryProvider } from '../../contexts/CategoryContext'
import { appointments } from '../../utils/Appointments'
import { Styles } from './style'

export const Home: React.FC = () => {
  return (
    <CategoryProvider>
      <View>
        <View style={Styles.header}>
          <Profile/>
          <ButtonAdd/>
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
              <Appointment data={item}/>
            )} 
          />
        </View>
      </View>
    </CategoryProvider>
  )
}