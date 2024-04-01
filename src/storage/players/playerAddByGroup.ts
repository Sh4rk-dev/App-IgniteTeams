import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

import { AppError } from "@utils/AppError";


export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  groups: string
) {
  try {
    const storagePlayers = await playersGetByGroup(groups);

    const playerAlreadyExists = storagePlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está cadastrado nesse grupo");
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${groups}`, storage);
  } catch (error) {
    throw error;
  }
}
