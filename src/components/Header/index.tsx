import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Styles } from './style'
import { theme } from '../../styles/theme'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<Props> = ({ title, action }: Props) => {
  const { heading, secondary100, background } = theme.colors
  const navigation = useNavigation()
  const handleGoBack = () => navigation.goBack()
  return(
    <LinearGradient style={Styles.container} colors={[secondary100, background]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading}/>
      </BorderlessButton>
      <Text style={Styles.title}>
        { title }
      </Text>
      { action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  )
}