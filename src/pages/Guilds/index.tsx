import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { guilds } from '../../fakes/Guilds'
import { Styles } from './style'

export const Guilds: React.FC = () => {
  return (
    <View style={Styles.container}>
      <FlatList 
        data={guilds} 
        keyExtractor={guild => guild.id} 
        renderItem={({ item }) => (
          
        )}
      />
    </View>
  )
}