import { Box, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import { DataRequest } from "./types";
import { deleteLaunch, getLaunch } from "../../../services/launch";
import { serializeValue } from "../../../helpers/currentsBRL";
import { Table } from "./table";

export const StepOne = () => {
	const [listPlan, setListPlan] = useState<DataRequest[]>([]);
	const [revenue, setRevenue] = useState("R$ 0,00");
	const [expenses, setExpenses] = useState("R$ 0,00");
	const [isOpen, setIsOpen] = useState(false);
	const [idPerson, setIdPerson] = useState("");

	const [name, setName] = useState("");

	const setNamePerson = () => {
		const token: string = localStorage.getItem("token") || "";

		const data = JSON.parse(token);

		setName(data.username[0].toUpperCase() + data.username.substring(1));
		setIdPerson(data.id);
	};

	const onSubmit = async (id: string) => {
		try {
			await deleteLaunch(id);

			await getDataRequest(idPerson);
			setIsOpen(!isOpen);
		} catch {
			console.log("Error ao deletar");
		}
	};

	const onOpen = () => {
		setIsOpen(!isOpen);
	};

	const onClose = () => {
		setIsOpen(!isOpen);
	};

	const calculateIncomeAndExpenses = (data: DataRequest[]) => {
		const valueRevenue = data.reduce((acc, data) => {
			if (data.kindLanch === "moneyDeposit") {
				return acc + Number(serializeValue(data.moneyLanch));
			}

			return acc + 0;
		}, 0);

		const valueExpenses = data.reduce((acc, data) => {
			if (data.kindLanch !== "moneyDeposit") {
				return acc + Number(serializeValue(data.moneyLanch));
			}

			return acc + 0;
		}, 0);


		setRevenue("R$ " + valueRevenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
		setExpenses("R$ " + valueExpenses.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
	};

	const getDataRequest = async (id: string) => {
		const result = await getLaunch(id);

		calculateIncomeAndExpenses(result);
		setListPlan(result);
	};

	useEffect(() => {
		setNamePerson();
	}, []);

	useEffect(() => {
		getDataRequest(idPerson);
	}, [idPerson]);

	return (
		<Grid
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			w="100%"
			h="100%"
		>
			<Grid
				w="100%"
				h="5vh"
				display='flex'
				padding="40px 0 40px 50px"
				marginBottom={5}
				alignItems='center'
				paddingRight="20px"
				bg="gray.100"
			>
				<Box display="flex" alignItems="center" justifyContent="center">
				  <Text fontSize={30} fontWeight={700} >Bem-vindo, </Text>
					<Text paddingLeft={3} fontSize={30} fontWeight={400}> {name}</Text>
				</Box>
			</Grid>

			<Grid w="100%" h="90vh" padding="0 30px 0 30px">
				<Grid
					w="100%"
					h="20vh"
					display='flex'
					alignItems='center'
					justifyContent='space-around'
					padding="10px 0 10px 0"
				>
					<Box
						w="45%"
						h="100%"
						bg="#63ac84"
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="20px"
					>
						<Box display="flex" justifyContent="space-between" width="40%">
							<Box display="flex">
								<Box h="50%" borderRadius="20px">
									<ArrowCircleUp color="white" size={40} />
								</Box>
								<Text paddingLeft="20px" color="white" fontSize="25px" fontWeight="800" >{revenue}</Text>
							</Box>
						</Box>
					</Box>

					<Box
						w="45%"
						h="100%"
						bg="#45254D"
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius="20px"
					>
						<Box display="flex" justifyContent="space-between" width="40%">
							<Box display="flex">
								<Box h="50%" borderRadius="20px">
									<ArrowCircleDown color="white" size={40} />
								</Box>
								<Text paddingLeft="20px" color="white" fontSize="25px" fontWeight="800" >{expenses}</Text>
							</Box>
						</Box>
					</Box>
				</Grid>

				<Grid
					w="100%"
					h="70vh"
					display='flex'
					alignItems='flex-start'
					justifyContent='center'
					overflowY="scroll"
					overflowX="hidden"
				>
					<Table
						listPlan={listPlan}
						onSubmit={onSubmit}
						onOpen={onOpen}
						onClose={onClose}
						isOpen={isOpen}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default StepOne;
