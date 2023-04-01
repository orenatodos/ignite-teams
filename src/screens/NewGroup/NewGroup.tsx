import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { Button, ButtonText } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TextField } from '@components/TextField'

import { AppError } from '@utils/AppError'

import { createGroup } from '@storage/group/create-group'

import * as Styled from './NewGroup.styles'

export function NewGroup(){
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleCreateNewGroup(){
    try {
      if(group.trim().length === 0){
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await createGroup(group)

      navigation.navigate('players', { group })
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo Grupo', error.message)
      }

      Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo.')
    }
  }

  return (
    <Styled.Container>
      <Header showBackButton />

      <Styled.Content>
        <Styled.Icon />

        <Highlight
          title="Nova turma"
          subtitle='Crie a turma para adicionar as pessoas'
        />

        <TextField
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button style={{ marginTop: 20 }} onPress={handleCreateNewGroup}>
          <ButtonText>Criar</ButtonText>
        </Button>
      </Styled.Content>
    </Styled.Container>
  )
}
