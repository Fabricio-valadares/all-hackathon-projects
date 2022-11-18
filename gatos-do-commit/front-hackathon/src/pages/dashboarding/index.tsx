import { Box, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { useNavigate } from "react-router-dom";
import { CaretLeft, CurrencyDollarSimple, Ladder } from "phosphor-react";

const Dashboarding = () => {
	const navigate = useNavigate();
	return (
		<Grid display='flex' flexDirection='row'>
			<Tabs width='100%'  variant='unstyled' orientation='vertical'>
				<TabList w='20%' h='100vh' backgroundColor='#1c1333'>
					<Grid
						display='flex'
						alignItems='center'
						justifyContent='center'
						height='20%'
						width='100%'
						color='white'
					>
						<Text>
							<img width={90} height={90} src='./assets/logo001.png' alt="logo"/>
						</Text>
					</Grid>
					<Grid
						display='flex'
						flexDirection='column'
						justifyContent='flex-start'
						height='70%'
						width='100%'
					>
						<Tab height='10%' color='gray' _selected={{ color: "white", bg: "#5b3165" }}>
							<CurrencyDollarSimple size={20} /> Primeira Etapa
						</Tab>
						<Tab height='10%' color='gray' _selected={{ color: "white", bg: "#5b3165" }}>
							<Ladder size={20} />Segunda Etapa</Tab>
					</Grid>
					<Grid height='10%'>
						<Box color='white' marginTop='10px' textAlign='center'>
							<Box
								width='100%'
								display='flex'
								justifyContent='center'
								alignItems='center'
								cursor='pointer'
								onClick={() => navigate("/")}
							>
								<CaretLeft size={20} />
								<Text >Sair</Text>
							</Box>
						</Box>
					</Grid>
				</TabList>
				<TabPanels overflowY="scroll" overflowX="hidden" w='80%' h='100vh'>
					<TabPanel padding='0px' >
						<StepOne />
					</TabPanel>
					<TabPanel padding='0px'>
						<StepTwo />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Grid>

	);
};

export default Dashboarding;