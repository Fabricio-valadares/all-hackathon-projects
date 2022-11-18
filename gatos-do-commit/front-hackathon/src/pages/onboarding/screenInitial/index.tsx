import {
	Box,
	Grid,
	Heading,
	Text,
	Button
} from "@chakra-ui/react";
import GridBase from "../../../components/GridBase";
import { useNavigate } from "react-router-dom";

const ScreenInitial = () => {
	const nagigate = useNavigate();

	const handleSubmit = () => {
		nagigate("/onboarding/question-one");
	};

	return (
		<GridBase title='Descubra seu perfil'>
			<Box paddingBottom='10px'>
				<Heading marginBottom='10px' as='h3'>Vamos lá descurir seu perfil?</Heading>
				<Text>Saber qual e seu perfil financeiro e super importante para descobri em qual <br />estagio você se encontra financeiramente</Text>
			</Box>

			<Grid paddingTop='20px' w="100%">
				<Box>
					<Button onClick={handleSubmit} type='button' color='white' bg='#591C66'>Vamos lá</Button>
				</Box>
			</Grid>
		</GridBase>
	);
};

export default ScreenInitial;