import React, { ReactNode } from 'react'
import { Modal, View, ModalProps } from 'react-native'
import { Background } from '../'
import { Styles } from './style'

type Props = ModalProps & {
  children: ReactNode;
}

export const ModalView: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={Styles.overlay}>
        <View style={Styles.container}>
          <Background>
            <View style={Styles.bar}/>
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )
}