import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Styles } from './style'

type Props = TextInputProps

export const SmallInput: React.FC<Props> = ({ ...rest }: Props) => {
  return (
    <TextInput
      style={Styles.container}
      keyboardType="numeric"
      { ...rest }
    />
  )
}