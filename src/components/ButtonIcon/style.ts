import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text500
  },
  iconWrapper: {
  },
  icon: {
    width: 24,
    height: 18
  }
})