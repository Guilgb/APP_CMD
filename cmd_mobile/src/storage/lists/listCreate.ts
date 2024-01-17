import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST_COLLECTION } from '../storageConfig';
import { ListGetAll } from './listsGetAll';

export async function ListCreate(newList: string) {
	try {
		const storedLists = await ListGetAll();
		const storage = JSON.stringify([...storedLists, newList]);

		await AsyncStorage.setItem(LIST_COLLECTION, storage);
	} catch (error) {
		throw error;
	}
}
