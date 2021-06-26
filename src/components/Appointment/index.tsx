import React from 'react'
import { Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { GuildIcon } from '../'
import CalendarSvg from '../../assets/svgs/calendar.svg'
import PlayerSvg from '../../assets/svgs/player.svg'
import { theme } from '../../styles/theme'
import { categories } from '../../fakes/Categories'
import { Styles } from './style'

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export const Appointment: React.FC<Props> = ({ data, ...props}: Props) => {
  const [category] = categories.filter((item) => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors
  return (
    <RectButton {...props}>
      <View style={Styles.container}>
        <GuildIcon/>

        <View style={Styles.content}>
          <View style={Styles.header}>
            <Text style={Styles.title}>{data.guild.name}</Text>
            <Text style={Styles.category}>{category.title}</Text>
          </View>
          
          <View style={Styles.footer}>
            <View style={Styles.dateInfo}>
              <CalendarSvg/>
              <Text style={Styles.date}>{ data.date}</Text>
            </View>
            <View style={Styles.playerInfo}>
              <PlayerSvg fill={ owner ? primary : on }/>
              <Text style={[Styles.player, { color: owner ? primary : on }]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  )
}