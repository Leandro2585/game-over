import React from 'react'
import { View } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { Styles } from './style'

export const Home: React.FC = () => {
  return (
    <View>
      <View style={Styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>
    </View>
  )
}