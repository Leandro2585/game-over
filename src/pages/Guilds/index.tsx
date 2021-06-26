import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Guild, GuildProps, ListDivider } from '../../components'
import { guilds } from '../../fakes/Guilds'
import { Styles } from './style'

type Props = {
  handleGuildsSelected(guild: GuildProps): void;
}

export const Guilds: React.FC<Props> = ({ handleGuildsSelected }: Props) => {
  return (
    <View style={Styles.container}>
      <FlatList 
        data={guilds}
        style={Styles.guilds} 
        keyExtractor={guild => guild.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 16 }}
        renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildsSelected(item)} 
          />
        )}
      />
    </View>
  )
}