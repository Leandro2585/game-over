import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Guild, GuildProps, ListDivider, Loading } from '../../components'
import { api } from '../../services/api'
import { Styles } from './style'

type Props = {
  handleGuildsSelected(guild: GuildProps): void;
}

export const Guilds: React.FC<Props> = ({ handleGuildsSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGuilds = async () => {
    const response = await api.get('/users/@me/guilds')
    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])
  return (
    <View style={Styles.container}>
      {loading 
        ? <Loading/>
        : <FlatList 
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

      }
    </View>
  )
}