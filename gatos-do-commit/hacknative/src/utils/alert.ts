import { Alert } from 'react-native'

export const alertMessage = (
	title: string = "",
	message: string = "",
	buttons: any = {}
) => {
	Alert.alert(title, message, buttons)
}