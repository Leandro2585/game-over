import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator 
      headerMode="none" 
      screenOptions={{
        cardStyle: {
          backgroundColor: '#242E38'
        }
      }}
    >
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}