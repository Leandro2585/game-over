import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { SignIn } from '../pages'

export const Routes: React.FC = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      { user.id ? <AuthRoutes/> : <SignIn/>} 
    </NavigationContainer>
  )
}