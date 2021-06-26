import React from 'react'
import { Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { GuildIcon, GuildProps } from '../'
import PlayerOn from '../../assets/images/player-on.png'
import PlayerOwner from '../../assets/images/player-owner.png'
// import CalendarSvg from '../../assets/svgs/calendar.svg'
import { theme } from '../../styles/theme'
import { categories } from '../../fakes/Categories'
import { Styles } from './style'

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

export const Appointment: React.FC<Props> = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category)
  const { owner } = data.guild
  const { primary, on, background, secondary100 } = theme.colors
  return (
    <RectButton {...rest}>
      <View style={Styles.container}>
        <LinearGradient 
          style={Styles.guildIconContainer} 
          colors={[background, secondary100]}
        >
          <GuildIcon/>
        </LinearGradient>
        <View style={Styles.content}>
          <View style={Styles.header}>
            <Text style={Styles.title}>{data.guild.name}</Text>
            <Text style={Styles.category}>{category.title}</Text>
          </View>
          
          <View style={Styles.footer}>
            <View style={Styles.dateInfo}>
              {/* <CalendarSvg/> */}
              <Text style={Styles.date}>{ data.date}</Text>
            </View>
            <View style={Styles.playerInfo}>
              { owner ? <PlayerOwner/> : <PlayerOn/> }
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