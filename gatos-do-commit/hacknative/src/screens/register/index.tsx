import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar, View } from 'react-native'

import Input from '../../components/input'
import { alertMessage } from '../../utils/alert'
import { registerPerson } from '../../services/auth'
import * as Styled from "./styles"

const Register = () => {
	const navigator = useNavigation();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleRedirect() {
		navigator.navigate('login')
	}

	const handleSubmit = async () => {
		if (name === "" || email === "" || password === "") {
			alertMessage('Campos Obrigatórios', 'Todos os canpos são obrigatórios!', [{ text: "Ok"}])

			return;
		}

		try {
			const payload = {
				username: name,
				password: password,
				email: email
			};

			await registerPerson(payload);

			setName("")
			setEmail("");
			setPassword("");
			handleRedirect();

		} catch {
			alertMessage('Error', 'Aconteceu um erro ao tentar fazer se registrar, tente novamente!', [{ text: "Ok"}]);
		}
	}

	return (
		<Styled.Container>
			<View>
				<Styled.Title>
					Register
				</Styled.Title>
				<Styled.SubTitle>
					Controle suas finanças e muda sua vida atrás de uma aplicação simples de usar.
				</Styled.SubTitle>

				<Input
					value={name}
					placeholder='Nome'
					onChangeText={(text: string) => setName(text)}
				/>

				<Input
					value={email}
					placeholder='E-mail'
					onChangeText={(text: string) => setEmail(text)}
				/>

				<Input
					value={password}
					placeholder='Senha'
					onChangeText={(text: string) => setPassword(text)}
				/>

				<Styled.ButtonSubmit onPress={handleSubmit}>
					<Styled.TextButton>Registar-se</Styled.TextButton>
				</Styled.ButtonSubmit>

				<Styled.TextRedirect onPress={handleRedirect}>Ir para Login</Styled.TextRedirect>

				<StatusBar
					barStyle="dark-content"
					backgroundColor='transparent'
					translucent
				/>
			</View>
		</Styled.Container>
	)
}

export { Register }
