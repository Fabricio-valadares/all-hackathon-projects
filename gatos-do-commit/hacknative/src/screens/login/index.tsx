import { StatusBar, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from 'react'

import * as Styled from "./styles"
import Input from '../../components/input'
import { loginPerson } from '../../services/auth'
import { DataFormContext } from '../../Provider/dataUser'
import { alertMessage } from '../../utils/alert'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setDataForm } = useContext(DataFormContext);

	const navigator = useNavigation();

	function handleRedirect() {
		navigator.navigate('home')
	}

	const handleSubmit = async () => {
		if (email === "" || password === "") {
			alertMessage('Campos Obrigatórios', 'Todos os canpos são obrigatórios!', [{ text: "Ok"}]);

			return;
		}

		try {
			const payload = {
				email: email,
				password: password
			};

			const { data } = await loginPerson(payload);

			setDataForm(data)
			setEmail("");
			setPassword("");
			handleRedirect();
		} catch {
			alertMessage(
				'Error',
				'Aconteceu um erro ao tentar fazer login, tente novamente!',
				[{ text: "Ok"}]
			)
		}
	}

	return (
		<Styled.Container>
			<View>
				<Styled.Title>
					Login
				</Styled.Title>

				<Styled.SubTitle>
					Controle suas finanças e muda sua vida atrás de uma aplicação simples de usar.
				</Styled.SubTitle>

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
					<Styled.TextButton>Enviar</Styled.TextButton>
				</Styled.ButtonSubmit>

				<Styled.TextRedirect onPress={() => navigator.navigate('register')}>
					Quero registar-se
				</Styled.TextRedirect>

				<StatusBar
					barStyle="dark-content"
					backgroundColor='transparent'
					translucent
				/>
			</View>
		</Styled.Container>
	)
}

export { Login }
