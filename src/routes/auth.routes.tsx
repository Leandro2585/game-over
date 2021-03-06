import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, SignIn, AppointmentDetails, AppointmentCreate } from '../pages'
import { Background } from '../components'

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
      <Screen name="AppointmentDetails" component={AppointmentDetails}/>
      <Screen name="AppointmentCreate" component={AppointmentCreate}/>
    </Navigator>
  )
}