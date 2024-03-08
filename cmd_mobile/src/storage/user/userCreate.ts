import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_COLLECTION } from '../storageConfig';
import { UserDTO } from '../../dtos/UserDTO';

export async function storageUserSave(newUser: UserDTO) {
	try {
		await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(newUser));
	} catch (error) {
		throw error;
	}
}

export async function UserGetStorage() {
	const storage = await AsyncStorage.getItem(USER_COLLECTION);
	const user: UserDTO = JSON.parse(storage || '{}');
	return user;
}

export async function UserDeleteStorage() {
	await AsyncStorage.removeItem(USER_COLLECTION);
}