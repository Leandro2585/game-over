import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}