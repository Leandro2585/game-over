import React from 'react'
import { View } from 'react-native'
import { Styles } from './style'

type Props = {
  isCentered?: boolean;
}

export const ListDivider: React.FC<Props> = ({ isCentered }: Props) => {
  return (
    <View style={[
      Styles.container,
      isCentered ? {
        marginVertical: 12
      } : {
        marginTop: 2,
        marginBottom: 31
      }
    ]}/>
  )
}