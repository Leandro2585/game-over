import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import { api } from '../services/api'

const { 
  SCOPE, 
  CLIENT_ID, 
  CDN_IMAGE, 
  REDIRECT_URI, 
  RESPONSE_TYPE 
} = process.env
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
    access_token?: string;
    error?: string;
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
    
      if(type === 'success' && !params.error) {

        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        const userData = await api.get(`/users/@me`)
        
        const firstName = userData.data.username.split(' ')[0]
        if(params.access_token) {
          setUser({
            id: userData.data.id,
            firstName,
            username: userData.data.username,
            email: userData.data.email,
            avatar: `${CDN_IMAGE}/avatars/${userData.data.id}/${userData.data.avatar}.png`,
            token: params.access_token
          })
        }
      }
    } catch {
      throw new Error('Não foi possível concluir seu login')
    } finally {
      setLoading(false)
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

