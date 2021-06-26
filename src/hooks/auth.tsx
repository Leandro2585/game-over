import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USER } from '../configs/storage'
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
  logout(): Promise<void>;
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
        const fetchUser = await api.get(`/users/@me`)
        
        const firstName = fetchUser.data.username.split(' ')[0]
        if(params.access_token) {
          const userData = {
            id: fetchUser.data.id,
            firstName,
            username: fetchUser.data.username,
            email: fetchUser.data.email,
            avatar: `${CDN_IMAGE}/avatars/${fetchUser.data.id}/${fetchUser.data.avatar}.png`,
            token: params.access_token
          }
          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
          setUser(userData)
        }
      }
    } catch {
      throw new Error('Não foi possível concluir seu login')
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    setUser({} as User)
    await AsyncStorage.removeItem(COLLECTION_USER)
  }

  const loadUserStorageData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USER)
    if(storage) {
      const userLogged = JSON.parse(storage) as User
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])
  
  return (
    <AuthContext.Provider value={{ 
      user,
      loading,
      authenticate,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

