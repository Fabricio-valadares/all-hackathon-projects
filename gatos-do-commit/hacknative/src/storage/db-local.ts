import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from 'react-native'
import { DataListCard } from '../screens/home/types'
import { KeyDBLocal } from './enum'

/**
*
* A funcionalidade de salvar dados no dispositivo foi desativado temporariamente
* para dar lugar a um banco de dados na nuvem.
*
*/

export const createNewItem = async (newData: any) => {
	const item = await getItem(KeyDBLocal.DB_ITENS);
	item.push(newData);

	try {
		await deleteItem(KeyDBLocal.DB_ITENS);

		await AsyncStorage.setItem(KeyDBLocal.DB_ITENS, JSON.stringify(item));

	} catch {
		Alert.alert('Error', 'Aconteceu um erro ao cadastar um novo item no db')
	}
}

export const getItem = async (key: string) => {
	try {
		const result =  await AsyncStorage.getItem(key) || '[]';

		return JSON.parse(result);

	} catch {
		console.log('Error', 'Aconteceu um erro ao pegar um item no db')
	}
}

export const deleteItem = async (key: string) => {
	try {
		return await AsyncStorage.removeItem(key);

	} catch {
		console.log('Error', 'Aconteceu um erro ao deletar item no db')
	}
}


export const deleteOneItem = async (id: string) => {
	const item = await getItem(KeyDBLocal.DB_ITENS);

	const newData = item.filter((ele: DataListCard) => ele.id !== id);

	try {
		await deleteItem(KeyDBLocal.DB_ITENS);

		await AsyncStorage.setItem(KeyDBLocal.DB_ITENS, JSON.stringify(newData));

	} catch {
		Alert.alert('Error', 'Aconteceu um erro ao cadastar um novo item no db')
	}
}
