import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '@storage/config'

import { listPlayersByGroup } from './list-players-by-group'
import type { PlayerStorageDTO } from './player-dto'

export async function addPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
){
  try {
    const storedPlayers = await listPlayersByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    )

    if(playerAlreadyExists.length > 0){
      throw new AppError(
        'Essa pessoa já está adiciona em um time aqui.'
      )
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
