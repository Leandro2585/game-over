import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const Styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center' 
  }
})