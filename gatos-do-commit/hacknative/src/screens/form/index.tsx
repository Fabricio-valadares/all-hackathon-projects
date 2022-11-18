import { useContext, useState } from 'react'
import { Alert, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { Picker } from "@react-native-picker/picker";
import { MaskedTextInput} from "react-native-mask-text";

import * as Styled from "./styles"
import Input from '../../components/input'
import { createLaunch } from '../../services/launch'
import { DataFormContext } from '../../Provider/dataUser'
import { alertMessage } from '../../utils/alert'

const FormComponent = () => {
	const [typeValue, setTypeValue] = useState("");
	const [valueDate, setValueDate] = useState("");
	const [valueCurrencyBRL, setValueCurrencyBRL] = useState("");
	const [valueTitle, setValueTitle] = useState("");
	const { dataForm } = useContext(DataFormContext);

	const navigator = useNavigation();

	function handleRedirect() {
		navigator.navigate('home')
	}

	const handlerSubmit = async () => {
		if (
			typeValue === "" ||
			valueDate === "" ||
			valueCurrencyBRL === "R$ 0,00" ||
			valueTitle === ""
		) {
			alertMessage('Campos Obrigatórios', 'Todos os canpos são obrigatórios!', [{ text: "Ok"}]);
			return;
		}

		try {

			const data = {
				idPerson: dataForm.id,
				kindLanch: typeValue,
				date: valueDate,
				title: valueTitle,
				moneyLanch: valueCurrencyBRL,
			};

			await createLaunch(data);

			setTypeValue("");
			setValueDate("");
			setValueCurrencyBRL("");
			setValueTitle("");

			alertMessage('Sucesso', 'Dados cadastrado com sucesso!', [{ text: "Ok", onPress: () => handleRedirect()}]);
		} catch {

			alertMessage('Error', 'Aconteceu um erro ao tentar cadastrar um novo item, tente novamente!', [{ text: "Ok"}]);
		}
	}

	return (
		<Styled.Container>
			<Styled.FormContainer>
				<Styled.BodyForm>
					<Styled.Title>Novo Item</Styled.Title>
				</Styled.BodyForm>

				<Styled.ContainerPrimary>
					<ScrollView>
						<Styled.ContainerPicker>
							<Picker
								onValueChange={(item) => setTypeValue(item)}
								selectedValue={typeValue}
							>
								<Picker.Item label="Tipo da entrada/saída" value="others" />
								<Picker.Item label="Entrada" value="moneyDeposit" />
								<Picker.Item label="Obrigatório Fixo (OF)" value="OF" />
								<Picker.Item label="Obrigatória variável (OV):" value="OV" />
								<Picker.Item label="Não Obrigatório Fixo (NOF)" value="NOF" />
								<Picker.Item label="Não obrigatório variáveis (NOV)" value="NOV" />
							</Picker>
						</Styled.ContainerPicker>

						<MaskedTextInput
							value={valueDate}
							mask="99/99/9999"
							placeholder='Digite a data'
							onChangeText={(text) => setValueDate(text)}
							style={Styled.styles.input}
							keyboardType="numeric"
						/>

						<Input
							value={valueTitle}
							placeholder='Titulo'
							onChangeText={(text: string) => setValueTitle(text)}
						/>

						<MaskedTextInput
							type="currency"
							options={{
								prefix: 'R$ ',
								decimalSeparator: ',',
								groupSeparator: '.',
								precision: 2
							}}
							onChangeText={(text) => setValueCurrencyBRL(text)}
							style={Styled.styles.input}
							keyboardType="numeric"
						/>
					</ScrollView>

					<Styled.ButtonSubmit onPress={handlerSubmit}>
						<Styled.TextButton>Finalizar</Styled.TextButton>
					</Styled.ButtonSubmit>

				</Styled.ContainerPrimary>
			</Styled.FormContainer>

			<StatusBar
				barStyle="dark-content"
				backgroundColor='transparent'
				translucent
			/>
		</Styled.Container>
	)
}

export { FormComponent }
