import { Alert, ScrollView, StatusBar, TouchableHighlight, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { useContext, useEffect, useState } from 'react'
import { PlusCircle, ArrowCircleUp, ArrowCircleDown, Trash } from "phosphor-react-native"

import * as Styled from "./styles"
import { DataListCard } from './types'
import { serializeValue } from '../../helpers/currencyBRL'
import { deleteLaunch, getLaunch } from '../../services/launch'
import { DataFormContext } from '../../Provider/dataUser'
import { alertMessage } from '../../utils/alert'

const Home = () => {
	const navigator = useNavigation();
	const [dataCard, setDataCard] = useState<DataListCard[]>([
		{
			id: '',
			kindLanch: '',
			date: '',
			title: '',
			moneyLanch: ''
		}
	]);

	const { dataForm } = useContext(DataFormContext);

	const [revenue, setRevenue] = useState('R$ 0,00');
	const [expenses, setExpenses] = useState('R$ 0,00');

	function handleRedirect() {
		navigator.navigate('form-component')
	}

	const getData = async () => {
		const result = await getLaunch(dataForm.id) || [];

		setDataCard(result);
		calculateIncomeAndExpenses(result)
	}

	const calculateIncomeAndExpenses = (data: DataListCard[]) => {
		const valueRevenue = data.reduce((acc, data) => {
			if (data.kindLanch === 'moneyDeposit') {
				return acc + Number(serializeValue(data.moneyLanch))
			}

			return acc + 0
		}, 0)

		const valueExpenses = data.reduce((acc, data) => {
			if (data.kindLanch !== 'moneyDeposit') {
				return acc + Number(serializeValue(data.moneyLanch))
			}

			return acc + 0
		}, 0)


		setRevenue("R$ " + valueRevenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
		setExpenses("R$ " + valueExpenses.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
	}

	const removeItem = async (id: string, name: string) => {
		Alert.alert(
			'Remover Card',
			`Deseja remove o card: ${name}`,
			[{
				text: "Cancelar",
				onPress: () => {},
				style: "cancel"
			  },
			  {
				text: "Ok", onPress: async () => {
					await deleteLaunch(id);

					await getData();
			}}]
		)
	}

	useEffect(() => {
		navigator.addListener('focus', () => {
			getData();
		});
	}, [navigator])

	return (
		<Styled.Container>
			<Styled.HeaderHome>
				<Styled.TitleHeader>Bem-vindo, {dataForm.username}</Styled.TitleHeader>
			</Styled.HeaderHome>
			<Styled.BodyHome style={Styled.styles.shadow}>
				<Styled.ContainerPrimary>
					<Styled.TitleContainerPrimary>Visão Geral</Styled.TitleContainerPrimary>
						<Styled.ButtonContainerPrimary onPress={handleRedirect} style={Styled.styles.shadow}>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
								}}>
								<PlusCircle color='#fff' size={28} />
							</View>
						</Styled.ButtonContainerPrimary>
				</Styled.ContainerPrimary>
				<Styled.ContainerSecondary>
					<Styled.CardOne style={Styled.styles.shadow}>
						<Styled.ConatinerIcon>
							<ArrowCircleUp color='#ffff' size={32} />
						</Styled.ConatinerIcon>
						<Styled.ContainerCardSecondary>
							<Styled.TextCard>
								{revenue}
							</Styled.TextCard>
						</Styled.ContainerCardSecondary>
					</Styled.CardOne>
					<Styled.CardTwo style={Styled.styles.shadow}>
						<Styled.ConatinerIcon>
							<ArrowCircleDown color='#ffff' size={32} />
						</Styled.ConatinerIcon>
						<Styled.ContainerCardSecondary>
							<Styled.TextCard>
								{expenses}
						</Styled.TextCard>
						</Styled.ContainerCardSecondary>
					</Styled.CardTwo>
				</Styled.ContainerSecondary>
				<ScrollView>
				<Styled.ContainerThird>
					<Styled.ContainerTitle>
						<Styled.TitleContainerThird>Ultimos gastos</Styled.TitleContainerThird>
					</Styled.ContainerTitle>
					<Styled.BodyContainerThird>
						{
							dataCard.map((valuesCard) => {
								return (
									<Styled.Card
										$color={valuesCard.kindLanch !== 'moneyDeposit' ? '#45254D' : '#56b07e'}
										style={Styled.styles.shadow}
									>
										{
											valuesCard.kindLanch !== 'moneyDeposit' ? (
												<ArrowCircleDown color='#fff' size={28} />
												) : (
												<ArrowCircleUp color='#fff' size={28} />
											)
										}
									<Styled.BodyData>
										<View>
											<Styled.TitleCard>{valuesCard.kindLanch}: {valuesCard.title}</Styled.TitleCard>
											<Styled.ValueCard>{valuesCard.moneyLanch}</Styled.ValueCard>
										</View>
										<Styled.DateCard>{valuesCard.date}</Styled.DateCard>
										<TouchableHighlight onPress={() => removeItem(valuesCard.id, valuesCard.title)}>
											<Trash color='#fff' size={30} />
										</TouchableHighlight>
									</Styled.BodyData>
								</Styled.Card>
								)
							})
						}
					</Styled.BodyContainerThird>
				</Styled.ContainerThird>
				</ScrollView>
			</Styled.BodyHome>

			<StatusBar
				barStyle="light-content"
				backgroundColor='transparent'
				translucent
      		/>
		</Styled.Container>
	)
}

export { Home }
