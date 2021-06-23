import React from 'react'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Styles } from './style'

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<Props> = ({
  title, icon: Icon, checked = false
}: Props) => {
  return (
    <RectButton>
      <View style={[Styles.content, { opacity: checked ? 1 : 0.4}]}>
        <View style={checked ? Styles.checked : Styles.check} />
        <Icon width={48} height={48} />
        <Text style={Styles.title}>{title}</Text>
      </View>
    </RectButton>
  )
}