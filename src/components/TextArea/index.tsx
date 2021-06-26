import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Styles } from './style'

type Props = TextInputProps;

export const TextArea: React.FC<Props> = ({ ...props }: Props ) => {
  return(
    <TextInput
      style={Styles.container}
      {...props}
    />
  )
}