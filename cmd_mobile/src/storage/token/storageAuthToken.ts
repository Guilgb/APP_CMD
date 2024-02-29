import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_TOKEN} from '../storageConfig'

export async function storageAuthToken(token: string) {
    await AsyncStorage.setItem(AUTH_TOKEN, token);
}