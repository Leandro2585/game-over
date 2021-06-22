import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { Styles } from './style'

export const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }: RectButtonProps) => {
  return (
    <RectButton style={Styles.container}>
      <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24}/>
    </RectButton>
  )
}