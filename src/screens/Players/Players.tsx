import { useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'


import { Button, ButtonText } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { PlayerCard } from '@components/PlayerCard'
import { TextField } from '@components/TextField'

import { AppError } from '@utils/AppError'

import { addPlayerByGroup } from '@storage/players/add-player-by-group'
import { listPlayersByGroup } from '@storage/players/list-players-by-group'

import * as Styled from './Players.styles'

type RouteParams = {
  group: string
}

export function Players(){
  const [playerName, setPlayerName] = useState('')
  const [players, setPlayers] = useState(['Renato', 'Gabi'])
  const [team, setTeam] = useState('Time A')

  const route = useRoute()
  const params = route.params as RouteParams

  async function handleAddPlayer(){
    if(playerName.trim().length === 0){
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.'
      )
    }

    const newPlayer = {
      name: playerName,
      team
    }

    try {
      await addPlayerByGroup(newPlayer, params.group)

      const players = await listPlayersByGroup(params.group)
    } catch (error){
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message)
      }

      Alert.alert('Nova pessoa', 'Não foi possivel adicionar')
    }
  }

  return (
    <Styled.Container>
      <Header showBackButton />

      <Highlight
        title={params.group}
        subtitle="Adicione a galera e separe os times"
      />

      <Styled.Form>
        <TextField
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setPlayerName}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Styled.Form>

      <Styled.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <Styled.NumberOfPlayers>
          {players.length}
        </Styled.NumberOfPlayers>
      </Styled.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button variant="secondary">
        <ButtonText>Remover turma</ButtonText>
      </Button>
    </Styled.Container>
  )
}
