import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Styles } from './style'
import { theme } from '../../styles/theme'

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<Props> = ({
  title, icon: Icon, checked = false, ...props
}: Props) => {
  const { background, secondary100, secondary50, secondary85, secondary40 } = theme.colors
  return (
    <RectButton {...props}>
      <LinearGradient
        style={Styles.container}
        colors={[background, secondary100]}>

        <LinearGradient 
          style={[Styles.content, { opacity: checked ? 1 : 0.5}]}
          colors={[ checked ? secondary85: secondary50 ,secondary40 ]}
        >
          <View style={checked ? Styles.checked : Styles.check} />
          <Icon width={48} height={48} />
          <Text style={Styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}