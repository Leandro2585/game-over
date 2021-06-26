import React, { ReactNode } from 'react'
import { Modal, View, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../'
import { Styles } from './style'

type Props = ModalProps & {
  children: ReactNode;
  closeModal(): void;
}

export const ModalView: React.FC<Props> = ({ children, closeModal, ...props }: Props) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...props}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={Styles.overlay}>
          <View style={Styles.container}>
            <Background>
              <View style={Styles.bar}/>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}