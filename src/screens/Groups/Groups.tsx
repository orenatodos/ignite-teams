import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Button, ButtonText } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'

import { listGroups } from '@storage/group/list-groups'

import * as Styled from './Groups.styles'

export function Groups() {
  const [groups, setGroups] = useState([
    'Galera da Rocketseat',
    'Amigos'
  ])

  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    async function loadGroups(){
      try {
        const groups = await listGroups()

        setGroups(groups)
      } catch (err) {

      }
    }

    loadGroups()
  }, []))

  return (
    <Styled.Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button onPress={handleNewGroup}>
        <ButtonText>Criar nova turma</ButtonText>
      </Button>
    </Styled.Container>
  )
}
