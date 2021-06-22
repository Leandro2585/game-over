import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    width: 49,
    height: 49,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 8,
  }
})