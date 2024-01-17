import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_COLLECTION } from '../storageConfig';

export async function UserCreate(newUser: string) {
	try {
		await AsyncStorage.setItem(USER_COLLECTION, newUser);
	} catch (error) {
		throw error;
	}
}
