import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { theme } from '../../styles/theme'
import { Styles } from './style'

export const Loading: React.FC = () => {
  return (
    <View>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
        style={Styles.container}
      />
    </View>
  )
}