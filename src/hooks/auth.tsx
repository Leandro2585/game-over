import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import { CDN_IMAGE, SCOPE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../configs/discord'
import { api } from '../services/api'

type User = {
  id: string;
  username: string;
  firstName: string;
  email: string;
  avatar: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  authenticate(): Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  }
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  const authenticate = async (): Promise<void> => {
    try {
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      setLoading(true)
      const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
    
      if(type === 'success') {

        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        const userData = await api.get(`/users/@me`)
        
        const firstName = userData.data.username.split(' ')[0]

        setUser({
          id: userData.data.id,
          firstName,
          username: userData.data.username,
          email: userData.data.email,
          avatar: `${CDN_IMAGE}/avatars/${userData.data.id}/${userData.data.avatar}.png`,
          token: params.access_token
        })
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch {
      throw new Error('Não foi possível concluir seu login')
    }
  }
  
  return (
    <AuthContext.Provider value={{ 
      user,
      loading,
      authenticate
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}